import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Moment } from 'moment';
import { Observable, of } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { City } from 'src/app/interfaces/city';
import { TerritoryService } from 'src/app/territory.service';

interface Territory {
  territory_id: string;
  territory_name: string;
  state_code: string;
  publication_urls: string[];
  level: string;
}

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
  territories: Observable<City[]> = new Observable();

  @ViewChild('cityField') cityField!: ElementRef;
  @ViewChild('termField') termField!: ElementRef;
  @ViewChild('periodField') periodField!: ElementRef;

  since: string = '';
  until: string = '';

  constructor(
    private territoryService: TerritoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.filteredOptions = this.termControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );

    this.territories = this.cityControl.valueChanges.pipe(
      startWith(''),
      switchMap((value) => {
        if (value !== '') {
          return this.findTerritory(value);
        } else {
          return of([]);
        }
      })
    );

    this.route.queryParams.subscribe((params) => {
      const { term, city } = params;
      this.termControl.setValue(term);
      this.cityControl.setValue(city);
    });
  }

  search(): void {
    let queryParams = {};
    const city = this.cityField.nativeElement.value;

    console.log('city ', city);

    const term = this.termField.nativeElement.value;

    if (city) {
      queryParams = { ...queryParams, city };
    }

    if (term) {
      queryParams = { ...queryParams, term };
    }

    if (this.since && this.until) {
      queryParams = { ...queryParams, since: this.since, until: this.until };
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

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  private findTerritory(value: string): Observable<Territory[]> {
    const filterValue = value.toLowerCase();
    return this.territoryService
      .findByName(filterValue)
      .pipe(map((result) => result));
  }
}
