import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContentService } from 'src/app/services/content/content.service';

@Component({
  selector: 'uni-knowledge-base',
  templateUrl: './knowledge-base.component.html',
  styleUrls: ['./knowledge-base.component.sass', '../styles.sass'],
})
export class KnowledgeBaseUniversitiesComponent implements OnInit {
  content$: Observable<any> = of(null);

  constructor(
    private contentService: ContentService
  ) {}
  
  ngOnInit() {
    this.content$ = this.contentService.find('knowledge-base-universities');
  }
}
