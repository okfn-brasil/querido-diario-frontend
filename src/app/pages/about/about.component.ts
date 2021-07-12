import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ABOUT } from 'src/app/components/footer/data';
import { INFOS } from '../home/data';
import { HISTORY, PRIVACY, SUCCESS_CASES, WHOWEARE } from './data';

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
    this.content$ = of({
      about: ABOUT,
      history: HISTORY,
      successCases: SUCCESS_CASES,
      whoWeAre: WHOWEARE,
      privacy: PRIVACY,
    })
  }

}
