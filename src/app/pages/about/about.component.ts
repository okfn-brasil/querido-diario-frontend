import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { INFOS } from '../home/data';
import { HISTORY, PRIVACY, SUCCESS_CASES, WHOWEARE, ABOUT } from './data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {
  content$: Observable<any> = of(null)
  infos$: Observable<any> = of(INFOS);

  constructor() { }

  ngOnInit(): void {
    console.log('ABOUT ', ABOUT)
    this.content$ = of({
      about: ABOUT,
      history: HISTORY,
      successCases: SUCCESS_CASES,
      whoWeAre: WHOWEARE,
      privacy: PRIVACY,
    })
  }

}
