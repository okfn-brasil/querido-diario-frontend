import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Moment } from 'moment';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Territory } from 'src/app/interfaces/territory';
import { TerritoryService } from 'src/app/services/territory/territory.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.sass'],
})
export class SearchFormComponent implements OnInit {
  termControl = new FormControl();

  @Input()
  form: any;

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
  territory: string[] = [];

  @ViewChild('cityField') cityField!: ElementRef;
  @ViewChild('termField') termField!: ElementRef;
  @ViewChild('periodField') periodField!: ElementRef;

  published_since: string = '';
  published_until: string = '';

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

    this.territoryService.findByName('').subscribe(response => {
      this.territories = response;
    });

    this.subscriptions.push(
      this.route.queryParams.subscribe((params) => {
        const { term, city } = params;
        this.territory = city;
        this.termControl.setValue(term);
      })
    );
  }

  search(): void {
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

    if (this.published_since && this.published_until) {
      queryParams = { ...queryParams, published_since: this.published_since, published_until: this.published_until };
    } else {
      queryParams = { ...queryParams, published_since: null, published_until: null };
    }

    this.router.navigate(['/pesquisa'], { queryParams });
  }

  onRangeSelected(range: { start: Moment; end: Moment }) {
    if (range.start) {
      this.published_since = range.start.format('YYYY-MM-DD');
    }
    if (range.end) {
      this.published_until = range.end.format('YYYY-MM-DD');
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

  ngOnDestroy() {
    for (let subscriptions of this.subscriptions) {
      subscriptions.unsubscribe();
    }
  }
}
