import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.sass']
})
export class GlossaryComponent implements OnInit {
  content$: Observable<any> = of(null)

  constructor(
    private contentService: ContentService
  ) {
  }

  ngOnInit(): void {
    this.content$ = this.contentService.find('glossary');
  }
}
