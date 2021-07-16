import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContentService } from 'src/app/services/content.service';
import { GLOSSARY } from './data';

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.sass']
})
export class GlossaryComponent implements OnInit {
  glossary$: Observable<any> = of(GLOSSARY);
  content$: Observable<any> = of(null)

  constructor(
    private contentService: ContentService
  ) {
  }

  chars = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ]

  ngOnInit(): void {
    this.content$ = this.contentService.find('glossary');
  }
}
