import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

interface Option {
  value: string;
  viewValue: string;
}

interface Options {
  options: Option[]
}
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class SelectComponent implements OnInit {

  @Input()
  label: string = '';

  @Input()
  theme: string = 'theme-light';

  @Output() onSelected = new EventEmitter<string>();

  constructor() { }

  @Input()
  options: Option[] = [];

  selectedOption: { value: string, viewValue: string} = {
    value: 'Relevância',
    viewValue: 'Relevância',
  }

  ngOnInit(): void {
  }

  selectionChange(value: string) {
    console.log('on select ', value)
    this.onSelected.emit(value);
  }

}
