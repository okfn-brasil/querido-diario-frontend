import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContentService } from 'src/app/services/content/content.service';

@Component({
  selector: 'edu-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeEducacaoComponent implements OnInit {
  content$: Observable<any> = of(null)

  constructor(
    private contentService: ContentService
  ) {
  }

  ngOnInit() {
   this.content$ = this.contentService.find('home-education');
  }
}
