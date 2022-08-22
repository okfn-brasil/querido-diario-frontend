import { Component, Input, OnInit } from '@angular/core';

const BREAKPOINT = 768;

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.sass'],
})
export class RowComponent implements OnInit {
  @Input() gap: number = 0;
  @Input() flex: boolean = false;

  @Input() layoutAlign: string = '';

  @Input() gapXs: number = 0;

  layout: string = 'row';

  constructor() {}

  ngOnInit(): void {
    const viewportWidth =
      document.documentElement.clientWidth || window.innerWidth;

    let layout = 'row';

    if (this.flex && viewportWidth < BREAKPOINT) {
      layout = 'column';
      if (this.gapXs > 0) {
        this.gap = this.gapXs;
      }
    }

    this.layout = layout;
  }
}
