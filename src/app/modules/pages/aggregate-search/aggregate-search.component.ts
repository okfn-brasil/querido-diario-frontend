import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { ResponseAggregate } from 'src/app/interfaces/aggregate';
import { Territory } from 'src/app/interfaces/territory';
import { AggregateService } from 'src/app/services/aggregate/aggregate.service';
import { TerritoryService } from 'src/app/services/territory/territory.service';

@Component({
  selector: 'app-aggregate-search',
  templateUrl: './aggregate-search.component.html',
  styleUrls: ['./aggregate-search.component.sass'],
})
export class AggregateSearchComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private territoryService: TerritoryService,
    private aggregateService: AggregateService
  ) {}

  cities: string[] = [];
  territories: Territory[] = [];
  aggregateResults: ResponseAggregate = {} as ResponseAggregate;

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const { state_code, territory_id } = params;

      this.aggregateResults = {} as ResponseAggregate;

      this.aggregateService
        .findAll({ territory_id: territory_id, state_code: state_code })
        .pipe(take(1))
        .subscribe((res) => {
          this.aggregateResults = res;
        });
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
}