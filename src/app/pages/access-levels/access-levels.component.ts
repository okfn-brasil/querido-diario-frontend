import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ACCESS_LEVELS } from './data';

@Component({
  selector: 'app-access-levels',
  templateUrl: './access-levels.component.html',
  styleUrls: ['./access-levels.component.sass']
})
export class AccessLevelsComponent implements OnInit {
  accessLevels$: Observable<any> = of(ACCESS_LEVELS);

  constructor() { }

  ngOnInit(): void {
  }

}
