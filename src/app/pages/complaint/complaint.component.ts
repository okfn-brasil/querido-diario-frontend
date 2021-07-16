import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.sass']
})
export class ComplaintComponent implements OnInit {
  content$: Observable<any> = of(null);

  constructor(
    private contentService: ContentService
  ) { }

  ngOnInit(): void {
    this.content$ = this.contentService.find('complaint');
  }

}
