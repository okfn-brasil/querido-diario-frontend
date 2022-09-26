import { Component, Input, OnInit } from '@angular/core';
import { Territory } from 'src/app/interfaces/territory';

@Component({
  selector: 'app-cities-search-result',
  templateUrl: './cities-search-result.component.html',
  styleUrls: ['./cities-search-result.component.sass']
})
export class CitiesSearchResultComponent implements OnInit {
  @Input() levels: number[] = [];
  @Input() territories: Territory[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  getCities(level: number){
    return this.territories.filter(city=> city.level === level.toString())
  }

}
