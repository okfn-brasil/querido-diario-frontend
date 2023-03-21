import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { AlertModel } from 'src/app/interfaces/alerts';
import { Territory } from 'src/app/interfaces/territory';

@Component({
  selector: 'edu-alert-item',
  templateUrl: './alert-item.component.html',
  styleUrls: ['./alert-item.component.sass']
})
export class AlertItemComponent implements OnChanges {
  @Input() alert: AlertModel = {} as AlertModel;
  @Input() cities: Territory[] = [];
  @Output() onDelete: EventEmitter<string> = new EventEmitter();
  territories = '';

  constructor() { }

  ngOnChanges(): void {
    this.getTerritories();
  }

  onClickDelete() {
    this.onDelete.emit(this.alert.id);
  }

  getTerritories() {
    this.territories = this.alert.territories && this.alert.territories.length ? 
    this.alert.territories.map(id => {
      const currCity = this.cities.find(city => city.territory_id === id);
      return `${currCity?.territory_name} (${currCity?.state_code})`;
    }).join(', ') : 
    'Nenhuma localização selecionada'
  }
}
