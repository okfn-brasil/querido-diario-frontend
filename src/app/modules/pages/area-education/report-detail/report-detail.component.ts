import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
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
  file: SafeResourceUrl = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    protected _sanitizer: DomSanitizer,
    private contentService: ContentService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = parseInt(params.id);
      
      this.contentService.find('education-reports').subscribe(result => {
        this.report = result.reports.find((report: ReportItem) => report.id === id);
        if(this.report.fileUrl) {
          this.file = this._sanitizer.bypassSecurityTrustResourceUrl(this.report.fileUrl);
        }
      });
    })
  }

}
