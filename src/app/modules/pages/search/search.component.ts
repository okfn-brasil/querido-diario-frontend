import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginationInstance } from 'ngx-pagination';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { EnvService } from 'src/app/env.service';
import { City } from 'src/app/interfaces/city';
import { Gazette, GazetteResponse } from 'src/app/interfaces/gazette';
import { Level } from 'src/app/interfaces/level';
import { LevelDescription, Pagination, SearchResponse } from 'src/app/interfaces/search';
import { Territory } from 'src/app/interfaces/territory';
import { GazetteService } from 'src/app/services/gazette/gazette.service';
import { TerritoryService } from 'src/app/services/territory/territory.service';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { GazetteModel } from 'src/app/interfaces/education-gazettes';

interface SelectedGazette{
  gazette: GazetteCSV,
  page:number
}

interface GazetteCSV {
  Cidade: string,
  Estado: string
  Excerto: string,
  Data: string,
  Edicao_Extra: string,
  URL_Texto: string,
  URL_PDF: string
}

export var listGazetteCSV: Array<GazetteCSV> = []

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
})
export class SearchComponent implements OnInit {
  constructor(
    private env: EnvService,
    private router: Router,
    private route: ActivatedRoute,
    private territoryService: TerritoryService,
    private gazetteService: GazetteService
  ) { }
  term: string | undefined = undefined;
  territoryId: string | undefined = undefined;
  cityName: string | null = null;
  foundResult: boolean = false;
  searchResultMaxSize: number = this.env.qdApiSearchResultMaxSize;
  response: Observable<SearchResponse> = new Observable();
  city: Observable<City | null> = new Observable();
  levelDescription: LevelDescription | undefined = undefined;
  cities: string[] = [];
  levels: number[] = [];

  levelIcon: string | null = null;

  territories: Territory[] = [];

  gazetteResponse: GazetteResponse | null = null;

  pagination: Pagination = { itemsPerPage: 10, currentPage: 1 };

  level$: Observable<Level | null> = of(null);

  @Output() pageBoundsCorrection = new EventEmitter();


  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 10,
    currentPage: 1,
  };

  orderOptions = [
    {
      viewValue: 'Relevância',
      value: 'relevance',
    },
    {
      viewValue: 'Mais recentes',
      value: 'descending_date',
    },
    {
      viewValue: 'Mais antigos',
      value: 'ascending_date',
    },
  ];

  //p: number = 0;
  p: number[] = [];

  page: number = 1;
  sort_by: string = 'relevance';

  pageChange(page: number) {
    const queryParams = this.route.snapshot.queryParams;
    this.router.navigate(['/pesquisa'], {
      queryParams: { ...queryParams, page },
    });

    let checkFather = document.querySelector('#father') as HTMLInputElement;
    if (checkFather.checked){checkFather.checked = false;}
  }

  nextPage() {
    this.pageChange(Number(this.pagination.currentPage || 1) + 1);
  }

  previousPage() {
    this.pageChange(Number(this.pagination.currentPage) - 1);
  }

  firstPage() {
    this.pageChange(1);
  }

  lastPage() {
    const page =
      this.gazetteResponse && this.gazetteResponse.total_gazettes / 10;
    if (page) {
      this.pageChange(Math.ceil(page));
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params.sort_by) {
        this.sort_by = params.sort_by;
      }

      this.levels = [];
      this.territories = [];
      if (params.city) {
        this.cities = Array.isArray(params.city) ? params.city : [params.city];
        this.getCities();
      }
      this.gazetteService
        .findAll({ ...params, territory_id: params.city })
        .pipe(take(1))
        .subscribe(
          (res) => {
            this.gazetteResponse = res;
            let pagination: Pagination = this.pagination;
            const totalItems = Math.ceil(res.total_gazettes / 10);
            pagination = {
              ...pagination,
              currentPage: params.page,
              totalItems,
            };
            this.pagination = pagination;
          },
          () => {
            this.gazetteResponse = { total_gazettes: 0 } as GazetteResponse;
          }
        );
    });
  }

  getCities() {
    this.cities.forEach((city) => {
      this.territoryService
        .findOne({ territoryId: city })
        .pipe(take(1))
        .subscribe((res) => {
          this.territories.push(res);
          const level = parseInt(res.level);
          if (!this.levels.includes(level)) {
            this.levels.push(level);
          }
        });
    });
  }

  openFile(link: string) {
    console.log('>>>>>> Open Link', link);

    window.open(link);
  }

  orderChanged(sort_by: string) {
    const queryParams = this.route.snapshot.queryParams;
    this.router.navigate(['/pesquisa'], {
      queryParams: { ...queryParams, sort_by },
    });
  }

  previous() {}

  // @todo export to utils
  extractUrlDomain(url: string): string {
    return url
      .replace(/www.|https:\/\/|http:\/\//g, '')
      .replace(/(br).*/, 'br');
  }

  formatText(text: string): string {
    return text.replace('\n', '<br />');
  }

  selectExcerpts(territory_name: string,
    territory_code: string,
    excerpt: string,
    date: string,
    is_extra_edition: boolean,
    txt_url: string,
    pdf_url: string) {

    let buttonDownloadCsv = document.querySelector('.btn-download') as HTMLButtonElement
    let textButtonDownloadCsv = buttonDownloadCsv?.querySelector('strong') as HTMLElement
    let checkFather = document.querySelector('#father') as HTMLInputElement

    let val: GazetteCSV = {
      Cidade: territory_name,
      Estado: territory_code,
      Excerto: excerpt,
      Data: date,
      Edicao_Extra: is_extra_edition ? "Edicao extra" : "Não extra",
      URL_Texto: txt_url,
      URL_PDF: pdf_url
    }

    let indexOfVal = listGazetteCSV.findIndex((gazette) => gazette.URL_Texto == val.URL_Texto)

    if (indexOfVal == -1) {
      if (listGazetteCSV.length == 0)
        buttonDownloadCsv?.setAttribute('style', 'background-color: #FF8500;')

      listGazetteCSV.push(val)

      textButtonDownloadCsv.innerText = `(${listGazetteCSV.length})`;


    } else {
      listGazetteCSV.splice(indexOfVal, 1)
      checkFather.checked = false

      if (listGazetteCSV.length == 0) {
        textButtonDownloadCsv.innerText = ``;
        buttonDownloadCsv?.setAttribute('style', 'background-color: rgba(245, 232, 233, 0.4);')

      } else {
        textButtonDownloadCsv.innerText = `(${listGazetteCSV.length})`;
      }
    }
  }

  isGazzeteSelected(gazette: Gazette) {
    let url = gazette.txt_url
    if (listGazetteCSV.length == 0) return false

    if (listGazetteCSV.find((gazette) => gazette.URL_Texto == url))
      return true

    return false

  }

  isAllSelected() {
    let listCheckBox = document.querySelectorAll('.checkbox-excerpts input[type="checkbox"]')

    for (let i = 0; i < listCheckBox.length; i++) {
      let box = listCheckBox[i] as HTMLInputElement
      
      if (box.checked == false) {
        return false
      }
    }

    return true
  }

  downloadCSV() {
    if (listGazetteCSV.length != 0) {
      var options = {
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalseparator: '.',
        showLabels: true,
        useBom: true,
        noDownload: false,
        headers: ["Municipio", "Estado", "Excerto", "Data_Publicacao", "Edicao_Extra", "URL_TXT", "URL_PDF_Original"]
      };
      new ngxCsv(listGazetteCSV, "pesquisa", options);
    } 
  }

  checkAll() {
    let listCheckBox = document.querySelectorAll('.checkbox-excerpts input[type="checkbox"]')
    let buttonDownloadCsv = document.querySelector('.btn-download') as HTMLButtonElement
    let checkFather = document.querySelector('#father') as HTMLInputElement

    for (let i = 0; i < listCheckBox.length; i++) {
      let box = listCheckBox[i] as HTMLInputElement

      if (checkFather.checked) {
        if (box.checked == false) {
          box.checked = true
          box.dispatchEvent(new Event('change'))
          buttonDownloadCsv?.setAttribute('style', 'background-color: #FF8500; cursor: pointer;')
        }
      } else {
        if (box.checked) {
          box.checked = false
          box.dispatchEvent(new Event('change'))
        }
      }
    }
    
    if (listGazetteCSV.length == 0) 
      buttonDownloadCsv?.setAttribute('style', 'background-color: rgba(245, 232, 233, 0.4);')
  }

}
