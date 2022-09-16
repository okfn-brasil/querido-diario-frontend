import { Component, Input, OnInit } from '@angular/core';

interface itemsModel {
  title: string;
  link: string;
  date: string;
}

@Component({
  selector: 'edu-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass'],
})
export class CarouselEducacaoComponent implements OnInit {
  @Input() items: itemsModel[] = [];
  currPosition = 0;
  mobileSize = 4;

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

  loadMore() {
    this.mobileSize += 4;
  }

  loadLess() {
    this.mobileSize -= 4;
  }

  ngOnInit() {
  }
}
