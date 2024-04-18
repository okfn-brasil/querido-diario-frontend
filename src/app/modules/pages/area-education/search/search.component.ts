import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ngxCsv } from 'ngx-csv';
import { City } from 'src/app/interfaces/city';
import { GazetteFilters, GazetteModel, GazetteResponse, OrderFilter, parseGazettes } from 'src/app/interfaces/education-gazettes';
import { CitiesService } from 'src/app/services/cities/cities.service';
import { EducationGazettesService } from 'src/app/services/education-gazettes/education-gazettes.service';
import { UserQuery } from 'src/app/stores/user/user.query';

interface List {
  [key: number]: GazetteModel[];
}

interface ValuesCSV {
  Cidade: string,
  Estado: string,
  Exerto: string,
  Data: string,
  Edicao: string,
  Edicao_Extra: string,
  URL_Texto: string,
  URL_PDF: string,
  Subtemas: string[],
  Entidades: string[]
}

@Component({
  selector: 'edu-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchEducationComponent implements OnInit {
  results: List = {};
  isLoggedIn = false;
  totalItems = 0;
  filters: GazetteFilters = {} as GazetteFilters;
  hasSearched = false;
  currPage = 0;
  querystring = '';
  timeout: ReturnType<typeof setTimeout> | undefined;
  showMobileFilters = false;
  isLoading = false;
  order = OrderFilter.relevance;
  orderList = [
    { value: OrderFilter.relevance, label: 'Mais relevante' },
    { value: OrderFilter.descending_date, label: 'Mais recente' },
    { value: OrderFilter.ascending_date, label: 'Mais antigo' }
  ];
  listPageIntern = 0;
  themes: string[] = [];
  cities: City[] = [];
  isOpenAlertModal = false;
  isOpenAdvanced = false;
  savedParams = '';

  valuesCsv: Array<ValuesCSV> = []
  isAtLeastOneSelected = false;

  constructor(
    private searchService: EducationGazettesService,
    private citiesService: CitiesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userQuery: UserQuery,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.querystring = params.querystring;
      this.filters = {
        entities: params.entities,
        subthemes: params.subthemes,
        period: params.period,
        until: params.until,
        published_since: params.published_since,
        scraped_since: params.scraped_since,
        scraped_until: params.scraped_until,
        territory_id: params.territory_id,
        sort_by: this.order,
        pre_tags: "<b>",
        post_tags: "</b>",
      } as GazetteFilters;
      if (Object.keys(Object.keys(this.filters).filter(key => !!this.filters[key])).length > 1) {
        this.onChangeFilters(this.filters);
      }
    }).unsubscribe();
    this.getFiltersInfo();

    this.userQuery.userData$.subscribe(userData => {
      if (userData.full_name) {
        this.isLoggedIn = true;
      }
    });
  }

  onChangeQuery() {
    this.onChangeFilters(this.filters);
  }

  onEnter(event?: KeyboardEvent) {
    if (event && event.key === 'Enter') {
      this.onChangeFilters(this.filters);
    }
  }

  onChangeOrder() {
    this.onChangeFilters(this.filters);
  }

  getItems(currFilters: string, params?: string) {
    this.isLoading = true;
    this.hasSearched = true;
    if (this.savedParams !== params) {
      this.currPage = 0;
    }

    this.searchService.getAllGazettes(currFilters, this.currPage).subscribe(response => {
      const nResponse = response as GazetteResponse;
      if (nResponse.excerpts && nResponse.excerpts.length) {
        this.results[this.currPage] = parseGazettes(nResponse.excerpts, this.filters.querystring as string);
        this.totalItems = nResponse.total_excerpts;
      } else {
        this.results = [];
        this.totalItems = 0;
      }

      this.listPageIntern = this.currPage;
      this.savedParams = params as string;
      this.isLoading = false;
    }, () => {
      this.isLoading = false;
      this.totalItems = 0;
      this.hasSearched = true;
    });
  }

  getIfCanSearch(obj: GazetteFilters) {
    if (!!obj.querystring || obj.entities || (obj.subthemes && obj.subthemes.length)) {
      return true;
    } else {
      this.hasSearched = false;
      return false;
    }
  };

  onChangeFilters(filters: GazetteFilters) {
    if (this.timeout) {
      clearTimeout(this.timeout)
    }
    this.timeout = setTimeout(() => {
      this.filters = { ...filters, querystring: this.querystring, sort_by: this.order };
      const newObj: GazetteFilters = {} as GazetteFilters;
      Object.keys(this.filters).forEach(key => {
        if (!!this.filters[key]) {
          newObj[key] = this.filters[key];
        }
      })
      const params = new URLSearchParams(newObj as any).toString();
      if (this.getIfCanSearch(newObj)) {
        this.getItems(this.convertToParams(newObj), params);
      }
      this.router.navigate([],
        {
          relativeTo: this.activatedRoute,
          queryParams: newObj,
        });
    }, 500);
  }


  convertToParams(filters: GazetteFilters) {
    let params = Object.keys(filters)
      .filter(key => (!!filters[key]))
      .map(key => {
        if (Array.isArray(filters[key])) {
          const arrayItems = filters[key] as string[];
          const resultArray: string[] = [];
          arrayItems.forEach(item => {
            if (item !== '0') {
              resultArray.push(`${key}=${item}`);
            }
          });
          return resultArray.length ? resultArray.join('&') : '';
        } else {
          return `${key}=${filters[key]}`;
        }
      })
      .join('&');

    if (params[params.length - 1] === '&') {
      params = params.slice(0, -1);
    }
    return params.replace(/territory_id/g, 'territory_ids');
  }

  getFiltersInfo() {
    this.searchService.getThemes().subscribe(results => {
      this.themes = results as string[];
    });

    this.citiesService.getAll().subscribe(cities => {
      this.cities = cities.cities as City[];
    });
  }

  openFilters() {
    this.showMobileFilters = true;
  }

  closeFilters() {
    this.showMobileFilters = false;
  }

  onChangePage($page: number) {
    this.isLoading = true;
    this.currPage = $page;
    window.scrollTo(0, 0);
    this.onChangeFilters(this.filters);
    const checkbokSelectAll = document.querySelectorAll('.checkbox-all-gazette')
    let c = checkbokSelectAll[0] as HTMLInputElement
    c.checked = false
    setTimeout(() => {
      this.validateCheckeds()
    }, 1000)
  }

  clearFilters() {
    this.filters = {} as GazetteFilters;
    this.onChangeFilters({} as GazetteFilters);
    this.showMobileFilters = false;
    setTimeout(() => {
      this.showMobileFilters = true;
    }, 10);
  }

  onCloseCreate() {
    this.isOpenAlertModal = false;
  }

  onOpenCreateAlert() {
    this.isOpenAlertModal = true;
  }

  onCloseAdvanced() {
    this.isOpenAdvanced = false;
  }

  onOpenAdvanced() {
    this.isOpenAdvanced = true;
  }

  addValuesCsv(territory_name: string,
    state_code: string,
    excerpt: string,
    date: string,
    edition: string,
    is_extra_edition: boolean,
    txt_url: string,
    pdf_url: string,
    subthemes: string[],
    entities: string[]
  ) {

    let val: ValuesCSV = {
      Cidade: territory_name,
      Estado: state_code,
      Exerto: excerpt,
      Data: date,
      Edicao: edition,
      Edicao_Extra: is_extra_edition ? "Edicao extra" : "Não extra",
      URL_Texto: txt_url,
      URL_PDF: pdf_url,
      Subtemas: subthemes,
      Entidades: entities
    }

    const checkbokSelectAll = document.querySelectorAll('.checkbox-all-gazette')
    let cAll = checkbokSelectAll[0] as HTMLInputElement

    for (let i = 0; i < this.valuesCsv.length; i++) {
      if (this.valuesCsv[i].Exerto == val.Exerto) {
        this.valuesCsv.splice(i, 1)
        cAll.checked = false
        return
      }
    }

    this.valuesCsv.push(val)
    this.isAtLeastOneSelected = this.valuesCsv.length > 0
    this.checkDownloadButton()
  }

  downloadCSV() {
    if (!this.isAtLeastOneSelected) {
      return
    }
    var options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      useBom: true,
      noDownload: false,
      headers: ["Município", "Estado", "Exerto", "Data da Publicação", "Edicao", "Edicao_Extra", "URL_TXT", "URL_PDF_Original", "Subtemas", "Entidades"]
    };
    new ngxCsv(this.valuesCsv, "pesquisa", options)
    this.valuesCsv = []
    this.resetStateAfterDownload()
  }

  selectAllGazette() {
    const checkbokSelectAll = document.querySelectorAll('.checkbox-all-gazette')
    const checkboxes_gazettes = document.querySelectorAll('input[name="checkbox-gazette"]')

    let ca = checkbokSelectAll[0] as HTMLInputElement

    if (ca.checked) {
      for (let i = 0; i < checkboxes_gazettes.length; i++) {
        let c = checkboxes_gazettes[i] as HTMLInputElement
        let estadoInicial = c.checked
        c.checked = true
        if (estadoInicial == false) {
          c.dispatchEvent(new Event('change'))
        }
      }
    } else {
      for (let i = 0; i < checkboxes_gazettes.length; i++) {
        let c = checkboxes_gazettes[i] as HTMLInputElement
        c.checked = false
        c.dispatchEvent(new Event('change'))
      }
    }
    this.isAtLeastOneSelected = this.valuesCsv.length > 0 || ca.checked
    this.checkDownloadButton()
  }

  validateCheckeds() {
    const checkbokSelectAll = document.querySelectorAll('.checkbox-all-gazette')
    const checkboxes_gazettes = document.querySelectorAll('input[name="checkbox-gazette"]')
    let count = 0
    let cAll = checkbokSelectAll[0] as HTMLInputElement

    for (let i = 0; i < checkboxes_gazettes.length; i++) {
      let c = checkboxes_gazettes[i] as HTMLInputElement

      this.valuesCsv.map((val, key) => {
        if (val.URL_PDF == c.id) {
          c.checked = true
          count += 1
        }
      })
    }

    if (count == 4) {
      cAll.checked = true
    }
    this.isAtLeastOneSelected = this.valuesCsv.length > 0 || cAll.checked
    this.checkDownloadButton()
  }
  checkDownloadButton() {
    const checkboxes_gazettes = document.querySelectorAll('input[name="checkbox-gazette"]')
    let isEnabled = false

    for (let i = 0; i < checkboxes_gazettes.length; i++) {
      let c = checkboxes_gazettes[i] as HTMLInputElement
      if (c.checked) {
        isEnabled = true
        return
      }
    }
    const downloadButton = document.querySelector('.btn-download') as HTMLButtonElement
    downloadButton.disabled = !isEnabled
  }

  resetStateAfterDownload() {
    const checkboxes = document.querySelectorAll('input[name="checkbox-gazette"]')
    checkboxes.forEach((checkbox) => {
      (checkbox as HTMLInputElement).checked = false
    });
    this.isAtLeastOneSelected = false

    const selectAllCheckbox = document.querySelector('.checkbox-all-gazette') as HTMLInputElement
    selectAllCheckbox.checked = false

    this.checkDownloadButton()
  }

}
