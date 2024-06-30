import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContentService } from 'src/app/services/content/content.service';
@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.sass'],
})
export class TechComponent implements OnInit {
  navigation$: Observable<any> = of(null);

  documentations$: Observable<any> = of(null);
  reports$: Observable<any> = of(null);

  constructor(private contentService: ContentService) {}


  ngOnInit(): void {
    this.navigation$ = this.contentService.find('tech-en_US/navigation');
    this.documentations$ = this.contentService.find('tech-en_US/documentation')
  }
}
