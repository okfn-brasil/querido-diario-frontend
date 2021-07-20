import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.sass'],
})
export class GoalsComponent implements OnInit {
  content$: Observable<any> = of(null);

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.content$ = this.contentService.find('our-goals');
  }
}
