import { Component, OnInit, VERSION } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContentService } from 'src/app/services/content.service';
import {
  DOC,
  REPORTS,
  TECH,
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

  constructor(private contentService: ContentService) {}


  ngOnInit(): void {
    this.docTexts$ = this.contentService.find('tech');
  }
}
