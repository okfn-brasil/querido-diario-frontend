import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class CarouselComponent implements OnInit {
  constructor() {}

  itemsToShow = 4;
  showControls = false;

  @Input()
  items: any;

  ngOnInit(): void {
    if (this.items && this.items.length > this.itemsToShow) {
      this.showControls = true;
    }
  }
}
