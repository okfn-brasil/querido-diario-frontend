import { Component, OnInit, VERSION } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  ARCHITECTURE,
  CENSUS,
  COLLECT,
  CONTRIBUTION,
  DOC,
  FRONTEND,
  HELP,
  PUBLIC_API,
  REPORTS,
  SCOPE,
  STARTUP,
  TECH,
  TOOLBOX,
  VERSIONS,
} from './data';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.sass'],
})
export class TechComponent implements OnInit {
  tech$: Observable<any> = of(TECH);
  doc$: Observable<any> = of(DOC);
  docTexts$: Observable<any[]> = of([]);
  reports$: Observable<any> = of(REPORTS);

  constructor() {}

  ngOnInit(): void {
    this.docTexts$ = of([
      HELP,
      SCOPE,
      ARCHITECTURE,
      VERSIONS,
      CONTRIBUTION,
      COLLECT,
      CENSUS,
      TOOLBOX,
      PUBLIC_API,
      FRONTEND,
      STARTUP,
    ]);
  }
}
