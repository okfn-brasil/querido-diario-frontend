import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContentService } from 'src/app/services/content/content.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.sass'],
})
export class DataComponent implements OnInit {
  content$: Observable<any> = of(null);
  isLoading = false;
  hasSearched = false;
  savedParams: string | undefined;

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.loadContent();
  }

  private loadContent() {
    this.content$ = this.contentService.find('data');
  }

  getItems(currFilters: string, params?: string) {
    this.isLoading = true;
    this.hasSearched = true;
  }

}