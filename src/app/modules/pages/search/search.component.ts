import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { PaginationInstance } from 'ngx-pagination';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { EnvService } from 'src/app/env.service';
import { City } from 'src/app/interfaces/city';
import { SearchResultCSV } from 'src/app/interfaces/download-csv';
import { Gazette, GazetteResponse } from 'src/app/interfaces/gazette';
import { Level } from 'src/app/interfaces/level';
import { LevelDescription, Pagination, SearchResponse } from 'src/app/interfaces/search';
import { Territory } from 'src/app/interfaces/territory';
import { GazetteService } from 'src/app/services/gazette/gazette.service';
import { TerritoryService } from 'src/app/services/territory/territory.service';

export var listCheckedSearchResults: Array<SearchResultCSV> = [];

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
  ) {}
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

    let checkboxSelectAll = document.querySelector(
      '#checkbox-select-all'
    ) as HTMLInputElement;
    if (checkboxSelectAll.checked) {
      checkboxSelectAll.checked = false;
    }
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

  selectSearchResults(gazette: Gazette, id: string) {
    let buttonDownloadCsv = document.querySelector(
      '.btn-download'
    ) as HTMLButtonElement;
    let textButtonDownloadCsv = buttonDownloadCsv?.querySelector(
      'strong'
    ) as HTMLElement;
    let checkboxSelectAll = document.querySelector(
      '#checkbox-select-all'
    ) as HTMLInputElement;

    let selectedGazette: SearchResultCSV = {
      id: id,
      municipio: gazette.territory_name,
      uf: gazette.state_code,
      excerto: gazette.excerpts.join(' >>> '),
      data_publicacao: gazette.date,
      edicao_extra: gazette.is_extra_edition ? 'Sim' : 'Não',
      url_arquivo_txt: gazette.txt_url || '',
      url_arquivo_original: gazette.url,
    };

    let indexOfSelectedGazette = listCheckedSearchResults.findIndex(
      (gazette) => gazette.id == selectedGazette.id
    );

    if (indexOfSelectedGazette == -1) {
      if (listCheckedSearchResults.length == 0)
        buttonDownloadCsv?.setAttribute(
          'style',
          'background-color: #FF8500; cursor: pointer;'
        );

      listCheckedSearchResults.push(selectedGazette);

      textButtonDownloadCsv.innerText = `(${listCheckedSearchResults.length})`;
    } else {
      listCheckedSearchResults.splice(indexOfSelectedGazette, 1);
      checkboxSelectAll.checked = false;

      if (listCheckedSearchResults.length == 0) {
        textButtonDownloadCsv.innerText = ``;
        buttonDownloadCsv?.setAttribute(
          'style',
          'background-color: rgba(245, 232, 233, 0.4);'
        );
      } else {
        textButtonDownloadCsv.innerText = `(${listCheckedSearchResults.length})`;
      }
    }
  }

  isSearchResultSelected(gazetteId: string) {
    if (listCheckedSearchResults.length == 0) return false;

    if (listCheckedSearchResults.find((gazette) => gazette.id == gazetteId))
      return true;

    return false;
  }

  isCheckboxCheckAllSelected() {
    let listCheckBox = document.querySelectorAll(
      '.checkbox-excerpts input[type="checkbox"]'
    );

    for (let i = 0; i < listCheckBox.length; i++) {
      let box = listCheckBox[i] as HTMLInputElement;

      if (box.checked == false) {
        return false;
      }
    }

    return true;
  }

  downloadCSV() {
    let downloadList: SearchResultCSV[] = [];

    // Removing Id before download
    listCheckedSearchResults.map((selectedResult) => {
      let searchResult = {
        municipio: selectedResult.municipio,
        uf: selectedResult.uf,
        excerto: selectedResult.excerto,
        data_publicacao: selectedResult.data_publicacao,
        numero_edicao: selectedResult.numero_edicao,
        edicao_extra: selectedResult.edicao_extra,
        url_arquivo_txt: selectedResult.url_arquivo_txt,
        url_arquivo_original: selectedResult.url_arquivo_original,
      } as SearchResultCSV;
      downloadList.push(searchResult);
    });

    if (downloadList.length != 0) {
      var options = {
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalseparator: '.',
        showLabels: true,
        useBom: true,
        noDownload: false,
        headers: [
          'Municipio',
          'Estado',
          'Excerto',
          'Data_Publicacao',
          'Edicao',
          'Edicao_Extra',
          'URL_TXT',
          'URL_PDF_Original',
        ],
      };
      new ngxCsv(downloadList, 'pesquisa', options);
    } else {
      document
        .querySelector('.btn-download')
        ?.setAttribute('ariaDisabled', 'true');
    }
  }

  // Select All Checkbox refers to one checkbox that will select all checkboxes in the list
  selectAllCheckboxAction() {
    let listCheckBox = document.querySelectorAll(
      '.checkbox-excerpts input[type="checkbox"]'
    );
    let buttonDownloadCsv = document.querySelector(
      '.btn-download'
    ) as HTMLButtonElement;
    let checkboxSelectAll = document.querySelector(
      '#checkbox-select-all'
    ) as HTMLInputElement;

    for (let i = 0; i < listCheckBox.length; i++) {
      let box = listCheckBox[i] as HTMLInputElement;

      if (checkboxSelectAll.checked) {
        if (box.checked == false) {
          box.checked = true;
          box.dispatchEvent(new Event('change'));
          buttonDownloadCsv?.setAttribute(
            'style',
            'background-color: #FF8500; cursor: pointer;'
          );
        }
      } else {
        if (box.checked) {
          box.checked = false;
          box.dispatchEvent(new Event('change'));
        }
      }
    }

    if (listCheckedSearchResults.length == 0) {
      buttonDownloadCsv?.setAttribute(
        'style',
        'background-color: rgba(245, 232, 233, 0.4); cursor: default;'
      );
    }
  }
}
