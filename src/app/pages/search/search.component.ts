import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaginationInstance } from 'ngx-pagination';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
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
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchComponent implements OnInit {
  constructor(
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

  //@Output() pageChange = new EventEmitter();
  @Output() pageBoundsCorrection = new EventEmitter();

  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 10,
    currentPage: 1,
  };

  orderOptions = [
    {
      value: 'Relevância',
      viewValue: 'Relevância',
    },
    {
      value: 'Mais recentes',
      viewValue: 'Mais recentes',
    },
    {
      value: 'Mais antigos',
      viewValue: 'Mais antigos',
    },
  ];

  //p: number = 0;
  p: number[] = [];

  page = 1;
  pageChange(event: any) {
    console.log('event ', event);
    this.page = event;
    this.response = this.findByResults({
      term: this.term,
      territoryId: this.territoryId,
      page: this.page,
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.territoryService.territory$.subscribe((territory: Territory) => {
        console.log('get it ', territory);
        this.territory = territory;
        this.levelDescription = getLevelDescription(territory.level);
        this.gazetteService.findAll(territory.territory_id).subscribe((res) => {
          this.gazetteResponse = res;
          console.log('get gazettes ', this.gazetteResponse)
        })
        console.log('levelDescription ', this.levelDescription);
      });
      const { term, city } = params;
      this.territoryService.select(city);

      /*
      this.term = term;
      this.cityName = city;
      if (city) {
        this.city = this.findTerritory(city);
        this.findTerritory(city).subscribe((city) => {
          if (city) {
            const territoryId = city.territory_id;
            this.territoryId = territoryId;
            this.response = this.findByResults({
              term,
              territoryId,
              page: this.page,
            });
          }
        });
      } else {
        console.log('logging ', term);
        this.response = this.findByResults({ term, page: this.page });
      }*/
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
    console.log('results ', { count: results, results });

    return of({ count, results });
  }

  openFile(link: string) {
    console.log('received ', link);
    window.open(link);
  }

  previous() {}
}
