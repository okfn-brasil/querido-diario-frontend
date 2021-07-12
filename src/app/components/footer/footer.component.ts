import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ABOUT, COPYRIGHT, SOCIAL, SUPPORT, TECH } from './data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  support$: Observable<any> = of(SUPPORT);
  tech$: Observable<any> = of(TECH);
  about$: Observable<any> = of(ABOUT)
  social$: Observable<any> = of(SOCIAL)
  copyright$: Observable<any> = of(COPYRIGHT)
  sections: Observable<any[]> = of([
    SUPPORT,
    TECH,
    ABOUT
  ])

  constructor() { }

  ngOnInit(): void {
  }

}
