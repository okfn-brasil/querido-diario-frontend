import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IconType, Sizeable } from 'src/app/interfaces/icon';
import { ContentService } from 'src/app/services/content/content.service';

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
  useCases$: Observable<any> = of(null);
  mediaImpact$: Observable<any> = of(null);

  icon: IconType = {
    file: 'right-arrow-purple',
    ...square(12)
  }

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.content$ = this.contentService.find('about');
    this.useCases$ = this.contentService.find('use-cases');
    this.mediaImpact$ = this.contentService.find('media-impact');
  }
}