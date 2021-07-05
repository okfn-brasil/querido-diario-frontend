import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class CarouselComponent implements OnInit {
  constructor() {}

  @Input()
  items: any;

  ngOnInit(): void {
  }
}
