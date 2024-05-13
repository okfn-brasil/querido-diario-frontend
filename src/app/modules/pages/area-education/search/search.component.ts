import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ngxCsv } from 'ngx-csv';
import { City } from 'src/app/interfaces/city';
import { SearchResultCSV } from 'src/app/interfaces/download-csv';
import {
  GazetteFilters,
  GazetteModel,
  GazetteResponse,
  OrderFilter,
  parseGazettes,
} from 'src/app/interfaces/education-gazettes';
import { CitiesService } from 'src/app/services/cities/cities.service';
import { EducationGazettesService } from 'src/app/services/education-gazettes/education-gazettes.service';
import { UserQuery } from 'src/app/stores/user/user.query';

interface SearchResultList {
  [key: number]: GazetteModel[];
}

@Component({
  selector: 'edu-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
})
export class SearchEducationComponent implements OnInit {
  results: SearchResultList = {};
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
    { value: OrderFilter.ascending_date, label: 'Mais antigo' },
  ];
  listPageIntern = 0;
  themes: string[] = [];
  cities: City[] = [];
  isOpenAlertModal = false;
  isOpenAdvanced = false;
  savedParams = '';

  searchResultsCsv: Array<SearchResultCSV> = [];

  constructor(
    private searchService: EducationGazettesService,
    private citiesService: CitiesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userQuery: UserQuery
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .subscribe((params) => {
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
          pre_tags: '<b>',
          post_tags: '</b>',
        } as GazetteFilters;
        if (
          Object.keys(
            Object.keys(this.filters).filter((key) => !!this.filters[key])
          ).length > 1
        ) {
          this.onChangeFilters(this.filters);
        }
      })
      .unsubscribe();
    this.getFiltersInfo();

    this.userQuery.userData$.subscribe((userData) => {
      if (userData.full_name) {
        this.isLoggedIn = true;
      }
    });
  }

  onChangeQuery() {
    this.onChangeFilters(this.filters);
    this.searchResultsCsv = [];
    this.checkSelectAll(false);
  }

  onEnter(event?: KeyboardEvent) {
    if (event && event.key === 'Enter') {
      this.onChangeFilters(this.filters);
      this.searchResultsCsv = [];
      this.checkSelectAll(false);
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

    this.searchService.getAllGazettes(currFilters, this.currPage).subscribe(
      (response) => {
        const nResponse = response as GazetteResponse;
        if (nResponse.excerpts && nResponse.excerpts.length) {
          this.results[this.currPage] = parseGazettes(
            nResponse.excerpts,
            this.filters.querystring as string
          );
          this.totalItems = nResponse.total_excerpts;
        } else {
          this.results = [];
          this.totalItems = 0;
        }

        this.listPageIntern = this.currPage;
        this.savedParams = params as string;
        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
        this.totalItems = 0;
        this.hasSearched = true;
      }
    );
  }

  getIfCanSearch(obj: GazetteFilters) {
    if (
      !!obj.querystring ||
      obj.entities ||
      (obj.subthemes && obj.subthemes.length)
    ) {
      return true;
    } else {
      this.hasSearched = false;
      return false;
    }
  }

  onChangeFilters(filters: GazetteFilters) {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.filters = {
        ...filters,
        querystring: this.querystring,
        sort_by: this.order,
      };
      const newObj: GazetteFilters = {} as GazetteFilters;
      Object.keys(this.filters).forEach((key) => {
        if (!!this.filters[key]) {
          newObj[key] = this.filters[key];
        }
      });
      const params = new URLSearchParams(newObj as any).toString();
      if (this.getIfCanSearch(newObj)) {
        this.getItems(this.convertToParams(newObj), params);
      }
      this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams: newObj,
      });
    }, 500);
  }

  convertToParams(filters: GazetteFilters) {
    let params = Object.keys(filters)
      .filter((key) => !!filters[key])
      .map((key) => {
        if (Array.isArray(filters[key])) {
          const arrayItems = filters[key] as string[];
          const resultArray: string[] = [];
          arrayItems.forEach((item) => {
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
    this.searchService.getThemes().subscribe((results) => {
      this.themes = results as string[];
    });

    this.citiesService.getAll().subscribe((cities) => {
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
    this.checkSelectAll(false);
    setTimeout(() => {
      this.validateCheckedSearchResults();
    }, 1000);
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

  addSearchResultsCsv(item: GazetteModel, id: string) {
    let searchResultItem: SearchResultCSV = {
      municipio: item.territory_name,
      uf: item.state_code,
      excerto: item.excerpt,
      data_publicacao: item.date,
      numero_edicao: item.edition,
      edicao_extra: item.is_extra_edition ? 'Sim' : 'Não',
      url_arquivo_txt: item.txt_url,
      url_arquivo_original: item.url,
      subtemas: item.subthemes,
      envolvidos: item.entities,
      id: id,
    };

    for (let i = 0; i < this.searchResultsCsv.length; i++) {
      if (this.searchResultsCsv[i].id == searchResultItem.id) {
        this.searchResultsCsv.splice(i, 1);
        this.checkSelectAll(false);
        return;
      }
    }
    this.searchResultsCsv.push(searchResultItem);
  }

  downloadCSV() {
    let arrayDownload: any = [];

    // Removing ID before download
    this.searchResultsCsv.map((selectedResult) => {
      let searchResult = {
        municipio: selectedResult.municipio,
        uf: selectedResult.uf,
        excerto: selectedResult.excerto,
        data_publicacao: selectedResult.data_publicacao,
        numero_edicao: selectedResult.numero_edicao,
        edicao_extra: selectedResult.edicao_extra,
        url_arquivo_txt: selectedResult.url_arquivo_txt,
        url_arquivo_original: selectedResult.url_arquivo_original,
        subtemas: selectedResult.subtemas,
        envolvidos: selectedResult.envolvidos,
      } as SearchResultCSV;
      arrayDownload.push(searchResult);
    });

    if (this.searchResultsCsv.length != 0) {
      var options = {
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalseparator: '.',
        showLabels: true,
        useBom: true,
        noDownload: false,
        headers: [
          'Município',
          'Estado',
          'Exerto',
          'Data da Publicação',
          'Edicao',
          'Edicao_Extra',
          'URL_TXT',
          'URL_PDF_Original',
          'Subtemas',
          'Entidades',
        ],
      };
      new ngxCsv(arrayDownload, 'pesquisa', options);
    } else {
      document
        .querySelector('.btn-download')
        ?.setAttribute('ariaDisabled', 'true');
    }
    this.searchResultsCsv = [];
    this.resetStateAfterDownload();
  }

  selectAllPageSearchResults() {
    const checkbokSelectAll = document.querySelectorAll(
      '.checkbox-all-gazette'
    );
    const resultCheckboxes = document.querySelectorAll(
      'input[name="checkbox-gazette"]'
    );

    let buttonCheckboxAll = checkbokSelectAll[0] as HTMLInputElement;

    if (buttonCheckboxAll.checked) {
      for (let i = 0; i < resultCheckboxes.length; i++) {
        let resultCheckbox = resultCheckboxes[i] as HTMLInputElement;
        let estadoInicial = resultCheckbox.checked;
        resultCheckbox.checked = true;
        if (estadoInicial == false) {
          resultCheckbox.dispatchEvent(new Event('change'));
        }
      }
    } else {
      for (let i = 0; i < resultCheckboxes.length; i++) {
        let resultCheckbox = resultCheckboxes[i] as HTMLInputElement;
        resultCheckbox.checked = false;
        resultCheckbox.dispatchEvent(new Event('change'));
      }
    }
  }

  validateCheckedSearchResults() {
    const resultCheckboxes = document.querySelectorAll(
      'input[name="checkbox-gazette"]'
    );
    let count = 0;

    for (let i = 0; i < resultCheckboxes.length; i++) {
      let resultCheckbox = resultCheckboxes[i] as HTMLInputElement;

      this.searchResultsCsv.map((resultItem) => {
        if (resultItem.id == resultCheckbox.id) {
          resultCheckbox.checked = true;
          count += 1;
        }
      });
    }

    count == resultCheckboxes.length
      ? this.checkSelectAll(true)
      : this.checkSelectAll(false);
  }

  resetStateAfterDownload() {
    const checkboxes = document.querySelectorAll(
      'input[name="checkbox-gazette"]'
    );
    checkboxes.forEach((checkbox) => {
      (checkbox as HTMLInputElement).checked = false;
    });

    this.checkSelectAll(false);
  }

  allSearchResultsSelected() {
    const resultCheckboxes = document.querySelectorAll(
      'input[name="checkbox-gazette"]'
    );
    let count = 0;

    for (let i = 0; i < resultCheckboxes.length; i++) {
      let resultCheckbox = resultCheckboxes[i] as HTMLInputElement;

      this.searchResultsCsv.map((val) => {
        if (val.id == resultCheckbox.id) {
          count += 1;
        }
      });
    }

    if (count == resultCheckboxes.length && count != 0) {
      this.checkSelectAll(true);
    }
  }

  checkSelectAll(isChecked: boolean) {
    const selectAllCheckbox = document.querySelector(
      '.checkbox-all-gazette'
    ) as HTMLInputElement;
    selectAllCheckbox.checked = isChecked;
  }
}
