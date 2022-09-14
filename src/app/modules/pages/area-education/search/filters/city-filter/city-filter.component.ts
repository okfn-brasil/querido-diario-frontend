import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { City } from 'src/app/interfaces/city';

@Component({
  selector: 'edu-city-filter',
  templateUrl: './city-filter.component.html',
  styleUrls: ['./city-filter.component.sass']
})
export class CityFilterComponent implements OnChanges {
  @Input() cities: City[] = [];
  @Input() label: string = 'Novo local...';
  isLoading = true;
  selectedCities: City[] = [];
  showPlaceholder = true;
  query = '';
  @Input() initialValue: string[] = [];
  @Output() changeLocations: EventEmitter<string[]> = new EventEmitter();

  constructor(
  ) { }

  getText() {
    const text = document.getElementById('location-filter-educacao')?.textContent;
    this.query = text as string;
  }

  onShowPlaceholder() {
    setTimeout(() => {
      this.resetInput();
      this.showPlaceholder = true;
    }, 300);
  }

  onHidePlaceholder() {
    this.showPlaceholder = false;
  }

  removeCity(city: City, event: Event) {
    event.stopPropagation();
    this.selectedCities = this.selectedCities.filter(currCity => city !== currCity);
    this.emitLocations();
  }

  addCity(city: City) {
    this.resetInput();
    this.selectedCities.push(city);
    this.emitLocations();
  }

  emitLocations() {
    this.changeLocations.emit(this.selectedCities.map(city => city.territory_id))
  }

  focusOnInput() {
    let container = document.getElementById('location-filter-educacao')
    if(container) {
      container.focus();
    }
  }

  resetInput() {
    this.query = '';
    let container = document.getElementById('location-filter-educacao')
    if(container) {
      container.textContent = '';
    }
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  getCitiesList() {
    if(this.cities && this.cities.length) {
      return this.cities.filter(city =>  city.territory_name.toLowerCase().includes(this.query.toLowerCase().trim()) && this.query.length >= 3);
    }
    return [];
  }

  ngOnChanges(): void {
    console.log(this.cities)
    if(this.cities && this.cities.length) {
      this.isLoading = false;
    }

    if(this.initialValue && this.initialValue.length) {
      this.selectedCities = this.cities.filter(city => this.initialValue.includes(city.territory_id))
    }
  }
}
