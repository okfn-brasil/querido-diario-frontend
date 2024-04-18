import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Moment } from 'moment';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Territory } from 'src/app/interfaces/territory';
import { TerritoryService } from 'src/app/services/territory/territory.service';

import { listGazetteCSV } from '../../pages/search/search.component';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.sass'],
})
export class SearchFormComponent implements OnInit {
  termControl = new FormControl();

  @Input()
  form: any;

  timeout: ReturnType<typeof setTimeout> | undefined;

  options: string[] = [
    'Compra emergencial COVID-19',
    'Dispensa de licitação',
    'Contratação',
    'Nomeação',
    'Saneamento básico',
  ];

  filteredOptions: Observable<string[]> = new Observable();

  cityControl = new FormControl();
  territories: Territory[] = [];
  selectedCities: Territory[] = [];
  territory: string[] = [];
  cityListToInput: Territory[] = [];
  loadingCities = false;

  @ViewChild('cityField') cityField!: ElementRef;
  @ViewChild('termField') termField!: ElementRef;
  @ViewChild('periodField') periodField!: ElementRef;

  since: string = '';
  until: string = '';
  query: string = '';
  sort_by: string = '';

  subscriptions: Subscription[] = [];

  constructor(
    private territoryService: TerritoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.filteredOptions = this.termControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filterTerms(value))
    );

    this.subscriptions.push(
      this.route.queryParams.subscribe((params) => {
        const { term, city, since, until, sort_by } = params;
        this.territory = city;
        this.selectedCities = [];
        this.since = since;
        this.until = until;
        this.sort_by = sort_by;

        if (city) {
          if (Array.isArray(city)) {
            city.forEach((currCity) => {
              this.findCityById(currCity);
            });
          } else {
            this.findCityById(city);
          }
        }

        this.termControl.setValue(term);
      })
    );
  }

  getCityList() {
    const selectedIds = this.selectedCities.map((city) => city.territory_id);
    return [
      ...this.territories.filter(
        (city) => !selectedIds.includes(city.territory_id)
      ),
      ...this.selectedCities,
    ];
  }

  findCities() {
    this.loadingCities = true;
    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    this.timeout = setTimeout(() => {
      this.territoryService
        .findByName(this.query.trim())
        .subscribe((response) => {
          response.forEach((city) => {
            this.territories.push(city);
          });
          this.loadingCities = false;
        });
    }, 500);
  }

  findCityById(id: string) {
    this.territoryService.findOne({ territoryId: id }).subscribe((response) => {
      this.selectedCities.push(response);
    });
  }

  search(): void {
    this.clearListGazzete();
    let queryParams = {};
    const term = this.termField.nativeElement.value;

    if (this.territory && this.territory.length) {
      queryParams = { ...queryParams, city: this.territory };
    } else {
      queryParams = { ...queryParams, city: null };
    }

    if (term) {
      queryParams = { ...queryParams, term };
    } else {
      queryParams = { ...queryParams, term: null };
    }

    if (this.since && this.until) {
      queryParams = { ...queryParams, since: this.since, until: this.until };
    } else {
      queryParams = { ...queryParams, since: null, until: null };
    }

    if (this.sort_by && this.sort_by.length) {
      queryParams = { ...queryParams, sort_by: this.sort_by };
    } else {
      queryParams = { ...queryParams, sort_by: null };
    }

    this.router.navigate(['/pesquisa'], { queryParams });
  }

  onRangeSelected(range: { start: Moment; end: Moment }) {
    if (range.start) {
      this.since = range.start.format('YYYY-MM-DD');
    }
    if (range.end) {
      this.until = range.end.format('YYYY-MM-DD');
    }
  }

  private _filterTerms(value: string): string[] {
    if (!value) {
      return [];
    }
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  displayFn(territory: Territory): string {
    return territory && territory.territory_label
      ? territory.territory_label
      : '';
  }

  onChangeLocation(locations: string[]) {
    this.territory = locations;
  }

  onChangeQuery(query: string) {
    this.query = query;
    if (this.query && this.query.length >= 3) {
      this.findCities();
    }
  }

  ngOnDestroy() {
    for (let subscriptions of this.subscriptions) {
      subscriptions.unsubscribe();
    }
  }

  clearListGazzete() {
    listGazetteCSV.length = 0;

    let buttonDownloadCsv = document.querySelector('.btn-download');
    let textButtonDownloadCsv = buttonDownloadCsv?.querySelector('strong');
    let checkFather = document.querySelector('#father');

    if (textButtonDownloadCsv) {
      textButtonDownloadCsv.innerText = ``;
      buttonDownloadCsv?.setAttribute(
        'style',
        'background-color: rgba(245, 232, 233, 0.4);'
      );

      let b = checkFather as HTMLInputElement;

      b.checked = false;
    }
  }
}
