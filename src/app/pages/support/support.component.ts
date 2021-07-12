import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GOAL_LIST } from 'src/app/data/home';
import { WHO_SUPPORTS, SUPPORT } from './data';

const splitItems = (items: any[]) => {
  console.log('received ', items);
  const _length = items.length;
  const _items: any[] = [];
  for (let i = 0; i < 5; i++) {
    const start = Math.ceil(_length / 5) * 5;
    let end = 5;
    if (start) {
      end = start + 5;
    }
    _items.push(items.slice(start, end));
  }
  console.log('output ', _items);
  return _items;
};

const spliceIntoChunks = (items: any[], chunkSize: number) => {
  const n = 5;
  const _line: string[] = [];
  const result = [_line, _line, _line, _line, _line];

  const wordsPerLine = Math.ceil(items.length / 5);

  for (let line = 0; line < n; line++) {
    for (let i = 0; i < wordsPerLine; i++) {
      const index = i + line * wordsPerLine;
      console.log(index)
      const value = items[index + 5];
      //const value = items.slice()
      if (!value) continue; //avoid adding "undefined" values
      result[line].push(value);
    }
  }

  return result;
};

const split = (items: string[], chunkSize: number) => {
  var result = [];
  for (var i = 0; i < items.length; i += chunkSize)
  result.push(items.slice(i, i + chunkSize));
  console.log('result', result)
  return result;
};

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.sass'],
})
export class SupportComponent implements OnInit {
  content$: Observable<any> = of(null);

  goals: Observable<any[]> = of(GOAL_LIST);

  constructor() {}

  ngOnInit(): void {
    let who = WHO_SUPPORTS;
    console.log('who ', who);
    const who_items = who.items.map((section: any) => ({
      title: section.title,
      text: section.text,
      items: spliceIntoChunks(section.items || [], 5),
    }));
    console.log('who_items ', who_items);

    this.content$ = of({
      support: SUPPORT,
      who_supports: { ...who, items: who_items },
    });
  }
}
