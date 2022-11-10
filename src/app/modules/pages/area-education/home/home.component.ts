import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ReportItem } from 'src/app/interfaces/reports';
import { ContentService } from 'src/app/services/content/content.service';

@Component({
  selector: 'edu-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeEducacaoComponent implements OnInit {
  content$: Observable<any> = of(null);
  reports = [];
  cases = [];

  constructor(
    private contentService: ContentService
  ) {
  }

  ngOnInit() {
   this.content$ = this.contentService.find('home-education');
   this.contentService.find('education-reports').subscribe(result => {
    this.reports = result.reports.map((report: ReportItem) => {
      return {
        ...report,
        link: '/educacao/relatorio/'
      }
    });
   });

   this.contentService.find('education-cases').subscribe(result => {
    this.cases = result.cases.map((report: ReportItem) => {
      return {
        ...report,
        link: '/educacao/caso/'
      }
    });
   });
  }
}
