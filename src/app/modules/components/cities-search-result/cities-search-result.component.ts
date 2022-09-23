import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities-search-result',
  templateUrl: './cities-search-result.component.html',
  styleUrls: ['./cities-search-result.component.sass']
})
export class CitiesSearchResultComponent implements OnInit {
  levels = [1, 2, 3];
  constructor() { }

  ngOnInit(): void {
  }

}
