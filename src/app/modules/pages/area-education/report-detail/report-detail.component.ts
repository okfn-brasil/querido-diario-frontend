import { Component, OnInit } from '@angular/core';
declare const PDFObject: any;
@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.sass']
})
export class ReportDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    PDFObject.embed("/pdf/sample-3pp.pdf", "#example1");
  }

}
