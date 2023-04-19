import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ReportItem } from 'src/app/interfaces/reports';
import { ContentService } from 'src/app/services/content/content.service';
@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.sass']
})
export class ReportDetailComponent implements OnInit {
  report: ReportItem = {} as ReportItem;
  content: SafeHtml = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    protected _sanitizer: DomSanitizer,
    private contentService: ContentService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = parseInt(params.id);

      const type = location.href.includes('caso') ? {
        url: 'education-cases',
        key: 'cases'
      } :
      {
        url: 'education-analises',
        key: 'analises'
      };

      this.contentService.find(type.url).subscribe(result => {
        this.report = result[type.key].find((report: ReportItem) => report.id === id);
        this.contentService.find(type.key + '/' + this.report.content).subscribe(content => {
          this.content = this._sanitizer.bypassSecurityTrustHtml(content.html);
        });
      });
    })
  }

}
