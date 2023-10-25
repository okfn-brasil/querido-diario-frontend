import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContentService } from 'src/app/services/content/content.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.sass'],
})
export class SupportComponent implements OnInit {
  content$: Observable<any> = of(null);
  contributors$: Observable<any> = of(null);
  navigation$: Observable<any> = of(null);

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.navigation$ = this.contentService.find('support/navigation');
    this.contributors$ = this.contentService.find('support/contributors');
    this.content$ = this.contentService.find('support/community');
  }
}
