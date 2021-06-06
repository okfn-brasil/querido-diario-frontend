import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

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

  constructor() { }

  @Input()
  options: Option[] = [];

  selectedOption: { value: string, viewValue: string} = {
    value: 'Relevância',
    viewValue: 'Relevância',
  }

  ngOnInit(): void {
  }

}
