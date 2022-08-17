import { Component, Input, OnInit } from '@angular/core';
import { Icon } from 'src/app/interfaces/icon';

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
