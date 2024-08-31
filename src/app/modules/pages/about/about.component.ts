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
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass'],
})
export class AboutComponent implements OnInit {
  content$: Observable<any> = of(null);


  icon: IconType = {
    file: 'right-arrow-purple',
    ...square(12)
  }

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.content$ = forkJoin({
      content: this.contentService.find('about'),
      cardsUseCases: this.contentService.find('use-cases'),
      cardsMediaImpact: this.contentService.find('media-impact'),
    }).pipe(
      map((data) => {
        data.content.useCases['items'] = data.cardsUseCases.useCases;
        data.content.mediaImpact['items'] = data.cardsMediaImpact.mediaImpact;
        return data.content;
      })
    );
  }
}