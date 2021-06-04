import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocomplete-item',
  templateUrl: './autocomplete-item.component.html',
  styleUrls: ['./autocomplete-item.component.sass']
})
export class AutocompleteItemComponent implements OnInit {

  @Input()
  textPrimary: string = '';

  @Input()
  textSecondary: string = '';

  @Input()
  icon: string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
