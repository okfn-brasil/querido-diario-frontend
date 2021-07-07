import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginationInstance } from 'ngx-pagination';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { getLevelDescription, termsResult } from 'src/app/data/search';
import { GazetteResponse, GazetteService } from 'src/app/gazette.service';
import { City } from 'src/app/interfaces/city';
import { CitiesService } from 'src/app/services/cities.service';
import { TerritoryService, Territory } from 'src/app/territory.service';
interface SearchResult {
  text: string;
  city: string;
  updatedAt: string;
  downloadUrl: string;
  territoryId: string;
}

interface SearchResponse {
  count: number;
  results: SearchResult[];
}

interface LevelDescription {
  text: string;
  button?: {
    text: string;
    href: string;
  };
}

interface Pagination {
  itemsPerPage: number;
  currentPage: number;
  totalItems?: number;
}
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private citiesService: CitiesService,
    private territoryService: TerritoryService,
    private gazetteService: GazetteService
  ) {}
  term: string | undefined = undefined;
  territoryId: string | undefined = undefined;
  cityName: string | null = null;
  foundResult: boolean = false;
  response: Observable<SearchResponse> = new Observable();
  //response: Observable<String[]> = new Observable();
  city: Observable<City | null> = new Observable();
  levelDescription: LevelDescription | undefined = undefined;

  territory: Territory | null = null;

  gazetteResponse: GazetteResponse | null = null;

  pagination: Pagination = { itemsPerPage: 10, currentPage: 1 };

  //@Output() pageChange = new EventEmitter();
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
  sort_by: string = '';
  pageChange(page: number) {
    const queryParams = this.route.snapshot.queryParams;
    this.router.navigate(['/pesquisa'], {
      queryParams: { ...queryParams, page },
    });
  }

  nextPage() {
    console.log('pagination ', this.pagination);
    this.pageChange(Number(this.pagination.currentPage) + 1);
  }

  previousPage() {
    this.pageChange(Number(this.pagination.currentPage) - 1);
  }

  firstPage() {
    this.pageChange(1);
  }

  lastPage() {
    console.log(
      'this.gazetteResponse.total_gazettes ',
      this.gazetteResponse?.total_gazettes
    );
    const page =
      this.gazetteResponse && this.gazetteResponse.total_gazettes / 10;
    if (page) {
      this.pageChange(Math.ceil(page));
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.sort_by = params.sort_by;

      if (params.city) {
        this.territoryService
          .findAll({ name: params.city })
          .subscribe((res) => {
            const territory = res[0];
            this.territory = territory;
            this.levelDescription = getLevelDescription(territory.level);

            this.gazetteService
              .findAll({ ...params, territory_id: territory.territory_id })
              .subscribe((res) => {
                this.gazetteResponse = res;
                let pagination: Pagination = this.pagination;
                const totalItems = Math.ceil(res.total_gazettes / 10);
                console.log('params page ', params.page);
                pagination = {
                  ...pagination,
                  currentPage: params.page,
                  totalItems,
                };
                this.pagination = pagination;
              });
          });
      } else {
        this.gazetteService.findAll(params).subscribe((res) => {
          this.gazetteResponse = res;
          let pagination: Pagination = this.pagination;
          const totalItems = Math.ceil(res.total_gazettes / 10);
          console.log('params page ', params.page);
          pagination = { ...pagination, currentPage: params.page, totalItems };
          this.pagination = pagination;
        });
      }
    });
  }

  private findTerritory(value: string): Observable<City | null> {
    const filterValue = value.toLowerCase();
    return this.citiesService
      .findOne(filterValue)
      .pipe(map((result) => result));
  }

  findByResults(options: {
    term?: string;
    territoryId?: string;
    page: number;
  }): Observable<SearchResponse> {
    let results = [] as SearchResult[];
    const { term, territoryId, page } = options;
    console.log('term ', term);
    if (term && territoryId) {
      results = termsResult.filter(
        (result) =>
          result.text.indexOf(term) > -1 && result.territoryId == territoryId
      );
    } else if (term) {
      results = termsResult.filter((result) => result.text.indexOf(term) > -1);
    } else if (territoryId) {
      results = termsResult.filter(
        (result) => result.territoryId == territoryId
      );
    }
    const count = results.length;
    results = results.slice(page - 1, page + 3);

    return of({ count, results });
  }

  openFile(link: string) {
    window.open(link);
  }

  orderChanged(sort_by: string) {
    const queryParams = this.route.snapshot.queryParams;
    console.log('queryParams ', queryParams);
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
}
