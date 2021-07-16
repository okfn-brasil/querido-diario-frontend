import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-access-levels',
  templateUrl: './access-levels.component.html',
  styleUrls: ['./access-levels.component.sass']
})
export class AccessLevelsComponent implements OnInit {
  content$: Observable<any> = of(null);

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.content$ = this.contentService.find('access-levels');
  }

}
