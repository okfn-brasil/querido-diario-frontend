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
  @Input() loadingCities = false;
  @Input() showAll = false;
  @Input() showCityLevel = false;
  showDropdown = false;
  isLoading = true;
  selectedCities: City[] = [];
  showPlaceholder = true;
  query = '';
  uniqueCities: City[] = [];
  @Input() initialValue: string[] = [];
  @Output() changeLocations: EventEmitter<string[]> = new EventEmitter();
  @Output() changeQuery: EventEmitter<string> = new EventEmitter();

  constructor(
  ) { }

  getText() {
    const text = document.getElementById('location-filter-educacao')?.textContent;
    this.query = text as string;
    this.changeQuery.emit(this.query);
  }

  onShowPlaceholder() {
    setTimeout(() => {
      this.focusOutInput();
      this.resetInput();
      if(this.selectedCities.length) {
        return;
      }

      
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
    this.focusOutInput();
  }

  emitLocations() {
    this.changeLocations.emit(this.selectedCities.map(city => city.territory_id))
  }

  focusOutInput() {
    this.showDropdown = false;
  }

  focusOnInput() {
    let container = document.getElementById('location-filter-educacao')
    if(container) {
      container.focus();
    }
  }

  onInputChange() {
    this.showDropdown = true;
  }

  onKeyDown(event: KeyboardEvent) {
    //Avoid break line.
    if (event.key === 'Enter') {
      event.preventDefault();
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
    if(this.uniqueCities && this.uniqueCities.length) {
      return this.uniqueCities.filter(city =>  city.territory_name.toLowerCase().includes(this.query.toLowerCase().trim()) && (this.query.length >= 3 || this.showAll)).sort(function(a,b){
        return a.territory_name.localeCompare(b.territory_name);
      }).slice(0, 100);
    }
    return [];
  }

  ngOnChanges(): void {
    if(this.cities && this.cities.length) {
      this.isLoading = false;
    }
    this.uniqueCities = [];
    this.cities.forEach(city => {
      if(!this.uniqueCities.find(uniqueCity => city.territory_id === uniqueCity.territory_id)) {
        this.uniqueCities.push(city);
      }
    });

    if(this.initialValue && this.initialValue.length) {
      this.selectedCities = this.uniqueCities.filter(city => this.initialValue.includes(city.territory_id))
    }
  }
}
