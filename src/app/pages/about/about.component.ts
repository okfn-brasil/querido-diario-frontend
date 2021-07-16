import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContentService } from 'src/app/services/content.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass'],
})
export class AboutComponent implements OnInit {
  content$: Observable<any> = of(null);

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.content$ = this.contentService.find('about');
  }
}
