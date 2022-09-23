import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IconType } from 'src/app/interfaces/icon';

interface itemsModel {
  title?: string;
  link?: string;
  date?: string;
  text?: string;
  actions?: [{
    text?: string;
    link?: string;
  }];
}

@Component({
  selector: 'edu-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass'],
})
export class CarouselEducacaoComponent implements OnChanges {
  @Input() items: itemsModel[] = [];
  @Input() type = 'default';
  currPosition = 0;
  mobileSize = 4;
  pages: number[] = [];

  icon: IconType = {
    file: 'right-arrow-purple',
    height: 12,
    width: 12
  }

  constructor() {
  }

  onClickNext() {
    if(this.currPosition < this.items.length - 2) {
      this.currPosition++;
    }
  }

  onClickPrev() {
    if(this.currPosition > 0) {
      this.currPosition--;
    }
  }

  onClickCircle(page: number) {
    const newPosition = page * 4;
    this.currPosition = newPosition === this.items.length - 1? newPosition - 1: newPosition;
  }

  loadMore() {
    this.mobileSize += 4;
  }

  loadLess() {
    this.mobileSize -= 4;
  }

  ngOnChanges(): void {
    this.pages = [];
    for(let i = 0; i < Math.ceil(this.items.length / 3); i++ ) {
      this.pages.push(i);
    }
  }

  checkDotActive(page: number) {
    const pageResult = (Math.ceil(this.currPosition / 3) - 1);
    return page === (pageResult === -1? 0 : pageResult)
  }
}
