import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContentService } from 'src/app/services/content/content.service';

@Component({
  selector: 'search-tutorial',
  templateUrl: './search-tutorial.component.html',
  styleUrls: ['./search-tutorial.component.sass'],
})

export class SearchTutorialComponent implements OnInit {
  content$: Observable<any> = of(null);

  constructor(
    private contentService: ContentService) {}


  ngOnInit(): void {
    this.content$ = this.contentService.find('search-tutorial/search-tutorial');
  }
}
