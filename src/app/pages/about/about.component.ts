import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContentService } from 'src/app/services/content.service';
interface Sizeable {
  height: number;
  width: number;
}

type Icon = { file: string } & Sizeable;

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

  icon: Icon = {
    file: 'right-arrow-purple',
    ...square(12)
  }

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.content$ = this.contentService.find('about');
  }
}
