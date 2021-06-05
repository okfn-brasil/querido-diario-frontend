import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { City } from 'src/app/interfaces/city';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.sass']
})
export class SearchFormComponent implements OnInit {

  termControl = new FormControl();
  
  options: string[] = [
    'Compra emergencial COVID-19',
    'Dispensa de licitação',
    'Contratação',
    'Nomeação',
    'Saneamento básico',
  ];

  filteredOptions: Observable<string[]> = new Observable();

  cityControl = new FormControl();
  filteredCities: Observable<City[]> = new Observable();

  @ViewChild('cityField') cityField!: ElementRef;
  @ViewChild('termField') termField!: ElementRef;
  @ViewChild('periodField') periodField!: ElementRef;

  constructor(
    private citiesService: CitiesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.filteredOptions = this.termControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );

  this.filteredCities = this.cityControl.valueChanges
    .pipe(
      startWith(''),
      switchMap(value => {
        if (value !== '') {
          return this._filterCity(value)
        } else {
          return of([])
        }
      })
    );
  }

  search(): void {
    let queryParams = {};
    const city = this.cityField.nativeElement.value;
    const term = this.termField.nativeElement.value;

    if (city) {
      queryParams = {...queryParams, city}
    }

    if (term) {
      queryParams = {...queryParams, term}
    }

    this.router.navigate(['/pesquisa'], { queryParams })
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filterCity(value: string): Observable<City[]> {
    const filterValue = value.toLowerCase();
    return this.citiesService.findByName(filterValue)
      .pipe(
        map((result) => result)
      )
  }

}
