import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContentService } from 'src/app/services/content/content.service';

@Component({
  selector: 'app-aggregate',
  templateUrl: './aggregate.component.html',
  styleUrls: ['./aggregate.component.sass'],
})
export class AggregateComponent implements OnInit {
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

  searched() {
    this.hasSearched = true;
  }
}