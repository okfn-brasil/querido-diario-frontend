import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContentService } from 'src/app/services/content.service';
@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.sass'],
})
export class TechComponent implements OnInit {
  navigation$: Observable<any> = of(null);

  documentationIndex$: Observable<any> = of(null);
  documentations$: Observable<any> = of(null);
  reports$: Observable<any> = of(null);

  constructor(private contentService: ContentService) {}


  ngOnInit(): void {
    this.navigation$ = this.contentService.find('tech/navigation');
    this.documentationIndex$ = this.contentService.find('tech/documentation-index');
    this.documentations$ = this.contentService.find('tech/documentation');
    this.reports$ = this.contentService.find('tech/reports')
  }
}
