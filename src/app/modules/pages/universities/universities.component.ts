import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin, of } from 'rxjs';
import { IconType, Sizeable } from 'src/app/interfaces/icon';
import { ContentService } from 'src/app/services/content/content.service';
import { map } from 'rxjs/operators';

const square = (size: number) : Sizeable => {
  return {
    height: size,
    width: size,
  }
}

@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.sass'],
})
export class UniversitiesComponent implements OnInit {
  content$: Observable<any> = of(null);


  icon: IconType = {
    file: 'right-arrow-purple',
    ...square(12)
  }

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.content$ = forkJoin({
      content: this.contentService.find('universities'),
      cardsUseCases: this.contentService.find('program-history'),
    }).pipe(
      map((data) => {
        data.content.useCases['items'] = data.cardsUseCases.programHistory;
        return data.content;
      })
    );
  }
}