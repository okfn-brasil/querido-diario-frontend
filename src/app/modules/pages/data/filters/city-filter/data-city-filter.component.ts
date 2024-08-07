import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { City } from 'src/app/interfaces/city';

@Component({
  selector: 'data-city-filter',
  templateUrl: './data-city-filter.component.html',
  styleUrls: ['./data-city-filter.component.sass']
})
export class DataCityFilterComponent implements OnChanges {
  @Input() cities: City[] = [];
  @Input() label: string = 'Novo local...';
  @Input() loadingCities = false;
  @Input() showAll = false;
  @Input() showCityLevel = false;
  @Input() disabled: boolean = false; 
  showDropdown = false;
  isLoading = true;
  selectedCities: City | null = null;
  showPlaceholder = true;
  query = '';
  uniqueCities: City[] = [];
  @Input() initialValue: Object | null = null;
  @Output() changeLocations: EventEmitter<City> = new EventEmitter();
  @Output() changeQuery: EventEmitter<string> = new EventEmitter();

  constructor(
  ) { }

  getText() {
    const text = document.getElementById('location-filter-data')?.textContent;
    this.query = text as string;
    this.changeQuery.emit(this.query);
  }

  onShowPlaceholder() {
    setTimeout(() => {
      this.resetInput();
      this.showPlaceholder = !this.selectedCities;
    }, 300);
  }

  onHidePlaceholder() {
    if (!this.disabled) {
      this.showPlaceholder = false;
    }
  }

  removeCity(city: City, event: Event) {
    event.stopPropagation();
    if (this.selectedCities === city ){
      this.selectedCities = null;
    }
    this.emitLocations();
    this.onShowPlaceholder();
  }

  addCity(city: City) {
    this.resetInput();
    this.selectedCities = city;
    this.showPlaceholder = false;
    this.emitLocations();
    this.showDropdown = false;
  }

  emitLocations() {
    if (this.selectedCities) {
      this.changeLocations.emit(this.selectedCities);
    } else {
      this.changeLocations.emit(undefined);
    }
  }

  focusOutInput() {
    this.showDropdown = false;
  }

  focusOnInput() {
    if (!this.disabled) { 
      let container = document.getElementById('location-filter-data');
      if (container) {
        container.focus();
      }
      this.showDropdown = true;
    }
  }

  resetInput() {
    this.query = '';
    let container = document.getElementById('location-filter-data')
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
  }

  blockTyping(event: KeyboardEvent) {
    if (this.disabled) {
      event.preventDefault();
    }
  }
}
