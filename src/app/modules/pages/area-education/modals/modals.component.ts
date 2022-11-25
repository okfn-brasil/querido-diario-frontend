import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'edu-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.sass']
})
export class ModalsComponent implements OnInit {
  @Output() onClose: EventEmitter<boolean> = new EventEmitter();
  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onClickClose() {
    this.onClose.emit(true);
  }
}
