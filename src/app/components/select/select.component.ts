import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

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

  selectedOption: { value: string, viewValue: string} = {
    value: 'Relevância',
    viewValue: 'Relevância',
  }

  options = [
    {
      value: 'Relevância',
      viewValue: 'Relavância'
    },
    {
      value: 'Mais recentes',
      viewValue: 'Mais recentes'
    },
    {
      value: 'Mais antigos',
      viewValue: 'Mais antigos'
    },
  ]

  ngOnInit(): void {
  }

}
