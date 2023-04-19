import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContentService } from 'src/app/services/content/content.service';

@Component({
  selector: 'edu-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutEducationComponent implements OnInit {
  content$: Observable<any> = of(null);

  constructor(
    private contentService: ContentService
  ) {
  }

  ngOnInit() {
   this.content$ = this.contentService.find('about-education');
  }
}
