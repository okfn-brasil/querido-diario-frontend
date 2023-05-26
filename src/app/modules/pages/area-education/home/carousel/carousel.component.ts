import { Component, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IconType } from 'src/app/interfaces/icon';

interface itemsModel {
  id?: number;
  title?: string;
  link?: string;
  date?: string;
  text?: string;
  actions?: [{
    text?: string;
    link?: string;
    target?: string;
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
  itemsPerPage = 4;

  iconDark: IconType = {
    file: 'right-arrow',
    height: 12,
    width: 12,
  };

  iconLight: IconType = {
    file: 'right-arrow-purple',
    height: 12,
    width: 12
  }

  icon = this.iconLight

  @Input()
  theme: 'dark' | 'light' | null = 'light';

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.currPosition = 0;
    this.itemsPerPage = window.innerWidth > 1100 ? 4 : 3;
  }

  constructor() {
  }

  ngOnInit(): void {
    if (this.theme === 'dark') {
      this.icon = this.iconDark;
    }
  }

  onClickNext() {
    if(this.currPosition < this.items.length - this.itemsPerPage) {
      if(this.type === 'second-type') {
        this.currPosition = this.currPosition + this.itemsPerPage;
      } else {
        this.currPosition++;
      }
    }
  }

  onClickPrev() {
    if(this.currPosition > 0) {
      if(this.type === 'second-type') {
        this.currPosition = this.currPosition - this.itemsPerPage;
      } else {
        this.currPosition--;
      }
    }
  }

  onClickCircle(page: number) {
    const newPosition = page * this.itemsPerPage;
    this.currPosition = newPosition;
  }

  ngOnChanges(): void {
    this.onResize();
    this.pages = [];
    for(let i = 0; i < Math.ceil(this.items.length / this.itemsPerPage); i++ ) {
      this.pages.push(i);
    }
  }

  checkDotActive(page: number) {
    const pageResult = (Math.ceil(this.currPosition / this.itemsPerPage));
    return page === (pageResult === -1? 0 : pageResult)
  }

}
