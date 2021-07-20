import { Component, ElementRef, Input, OnInit } from '@angular/core';

const BREAKPOINT = 768;
@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.sass'],
})
export class ColumnComponent implements OnInit {
  @Input() gap: number = 0;
  @Input() flex: boolean = false;
  @Input() gapXs: number = 0;

  layout: string = 'column';

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const viewportWidth =
      document.documentElement.clientWidth || window.innerWidth;

    let layout = 'column';

    if (this.flex && viewportWidth < BREAKPOINT) {
      layout = 'row';


    }

    if (viewportWidth < BREAKPOINT && this.gapXs > 0) {
      this.gap = this.gapXs;
    }

    this.layout = layout;
  }
}
