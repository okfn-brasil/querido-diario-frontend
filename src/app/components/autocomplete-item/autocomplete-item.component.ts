import { Component, Input, OnInit } from '@angular/core';

interface Icon {
  file: string;
  height: number;
  width: number;
}

@Component({
  selector: 'app-autocomplete-item',
  templateUrl: './autocomplete-item.component.html',
  styleUrls: ['./autocomplete-item.component.sass']
})
export class AutocompleteItemComponent implements OnInit {

  @Input()
  title: string = '';

  @Input()
  text: string = '';

  @Input()
  icon?: Icon;


  constructor() { }

  ngOnInit(): void {
  }

}
