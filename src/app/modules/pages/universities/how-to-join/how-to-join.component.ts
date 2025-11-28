import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContentService } from 'src/app/services/content/content.service';

@Component({
  selector: 'uni-how-to-join',
  templateUrl: './how-to-join.component.html',
  styleUrls: ['./how-to-join.component.sass']
})
export class HowToJoinUniversitiesComponent implements OnInit {
  content$: Observable<any> = of(null);
  loading = true;

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.content$ = this.contentService.find('how-to-join-universities');
    this.content$.subscribe(() => {
      this.loading = false;
    });
  }
}

