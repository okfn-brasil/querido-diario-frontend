import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertModel } from 'src/app/interfaces/alerts';

@Component({
  selector: 'edu-alert-item',
  templateUrl: './alert-item.component.html',
  styleUrls: ['./alert-item.component.sass']
})
export class AlertItemComponent implements OnInit {
  @Input() alert: AlertModel = {} as AlertModel;
  @Output() onDelete: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClickDelete() {
    this.onDelete.emit(this.alert.id);
  }

}
