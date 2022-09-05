import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GazetteFilters, GazetteModel, GazetteResponse, parseGazettes } from 'src/app/interfaces/education-gazettes';
import { EducationGazettesService } from 'src/app/services/education-gazettes/education-gazettes.service';

interface List {
  [key: number]: GazetteModel[];
}

@Component({
  selector: 'edu-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchEducationComponent implements OnInit {
  results: List = {};
  filters: GazetteFilters = {} as GazetteFilters;
  currPage = 0;
  querystring = '';
  timeout: ReturnType<typeof setTimeout> | undefined;

  constructor(
    private searchService: EducationGazettesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getItems();

    this.activatedRoute.queryParams.subscribe(params => {
      this.querystring = params.querystring;
      this.filters = {
        entities: params.entities,
        subthemes: params.subthemes,
        period: params.period,
        until: params.until,
        since: params.since,
        local: params.local
      } as GazetteFilters;
    }).unsubscribe();
  }

  onChangeQuery() {
    this.onChangeFilters(this.filters);
  }

  getItems(params?: string) {
    this.searchService.getAllGazettes(params, 0).subscribe(response => {
      this.results[this.currPage] = parseGazettes((response as GazetteResponse).excerpts, this.filters.query as string);
    })
  }

  onChangeFilters(filters: GazetteFilters) {
    if(this.timeout) {
      clearTimeout(this.timeout)
    }
    this.timeout = setTimeout(() => {
      this.filters = {...filters, querystring: this.querystring};
      const newObj: GazetteFilters = {} as GazetteFilters;
      Object.keys(this.filters).forEach(key => {
        if(!!this.filters[key]) {
          newObj[key] = this.filters[key];
        }
      })
      const params = new URLSearchParams(newObj as any).toString();
      this.getItems(params);
      this.router.navigate([], 
        {
          relativeTo: this.activatedRoute,
          queryParams: newObj,
      });
    }, 500);
  }
}
