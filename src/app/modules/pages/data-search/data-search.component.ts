import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { EnvService } from 'src/app/env.service';
import { City } from 'src/app/interfaces/city';

import { ResponseAggregate} from 'src/app/interfaces/aggregate';

import { LevelDescription, SearchResponse } from 'src/app/interfaces/search';
import { Territory } from 'src/app/interfaces/territory';
import { AggregateService } from 'src/app/services/aggregate/aggregate.service';
import { TerritoryService } from 'src/app/services/territory/territory.service';

@Component({
  selector: 'app-data-search',
  templateUrl: './data-search.component.html',
  styleUrls: ['./data-search.component.sass'],
})
export class AggregateSearchComponent implements OnInit {
  constructor(
    private env: EnvService,
    private router: Router,
    private route: ActivatedRoute,
    private territoryService: TerritoryService,
    private aggregateService: AggregateService,
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

  levelIcon: string | null = null;

  territories: Territory[] = [];

  aggregateResults: ResponseAggregate = {} as ResponseAggregate;
  aggregateResultslength:number = 0

  @Output() pageBoundsCorrection = new EventEmitter();

  ngOnInit(): void {

    this.route.queryParams.subscribe((params) => {
      const {state_code, territory_id} = params
      
      this.aggregateResults = {} as ResponseAggregate

      this.aggregateService
      .findAll({territory_id:territory_id, state_code:state_code, })
      .pipe(take(1))
      .subscribe((res) => {
          this.aggregateResults=res;
          this.aggregateResultslength = res.aggregates.length
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
}
