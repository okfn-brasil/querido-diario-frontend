import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContentService } from 'src/app/services/content/content.service';

const CARD_COLORS = ['purple-light', 'purple', 'purple-dark'] as const;

@Component({
  selector: 'uni-program-history',
  templateUrl: './program-history.component.html',
  styleUrls: ['./program-history.component.sass']
})
export class ProgramHistoryUniversitiesComponent implements OnInit {
  content$: Observable<any> = of(null);
  loading = true;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.content$ = this.contentService.find('program-history-universities');
    this.content$.subscribe(() => {
      this.loading = false;
    });
  }

  getCardColor(index: number): string {
    return CARD_COLORS[index % CARD_COLORS.length];
  }
}
