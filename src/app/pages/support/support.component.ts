import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContentService } from 'src/app/services/content.service';

const spliceIntoChunks = (items: any[], chunkSize: number) => {
  const n = 5;
  const _line: string[] = [];
  const result = [_line, _line, _line, _line, _line];

  const wordsPerLine = Math.ceil(items.length / 5);

  for (let line = 0; line < n; line++) {
    for (let i = 0; i < wordsPerLine; i++) {
      const index = i + line * wordsPerLine;
      const value = items[index + 5];
      if (!value) continue; //avoid adding "undefined" values
      result[line].push(value);
    }
  }

  return result;
};

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.sass'],
})
export class SupportComponent implements OnInit {
  content$: Observable<any> = of(null);
  navigation$: Observable<any> = of(null);

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.navigation$ = this.contentService.find('support/navigation');

    this.contentService.find('support/community').subscribe((data: any) => {
      const items = data.items.map((section: any) => ({
        title: section.title,
        text: section.text,
        items: spliceIntoChunks(section.items || [], 5),
      }));
      const foo = { ...data, items: items };
      console.log('foo: ', foo);
      this.content$ = of(foo);
    });
  }
}
