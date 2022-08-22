import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContentService } from 'src/app/services/content.service';
@Component({
  selector: 'search-tutorial',
  templateUrl: './search-tutorial.component.html',
  styleUrls: ['./search-tutorial.component.sass'],
})

export class SearchTutorialComponent implements OnInit {
  content$: Observable<any> = of(null);
  navigation$: Observable<any> = of(null);
  documentationIndex$: Observable<any> = of(null);
  documentations$: Observable<any> = of(null);
  reports$: Observable<any> = of(null);

  constructor(private contentService: ContentService) {}


  ngOnInit(): void {
    this.content$ = this.contentService.find('search-tutorial/search-tutorial');
    this.navigation$ = this.contentService.find('tech/navigation');
    this.documentationIndex$ = this.contentService.find('tech/documentation-index');
    this.documentations$ = this.contentService.find('search-tutorial/search-tutorial');
    this.reports$ = this.contentService.find('tech/reports')
  }
}
