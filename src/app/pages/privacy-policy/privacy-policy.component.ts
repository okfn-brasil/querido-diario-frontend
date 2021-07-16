import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.sass']
})
export class PrivacyPolicyComponent implements OnInit {
  content$: Observable<any> = of(null);

  constructor(
    private contentService: ContentService
  ) {
  }

  ngOnInit(): void {
    this.content$ = this.contentService.find('privacy');
  }

}
