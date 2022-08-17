import { Directive, ElementRef, Input } from '@angular/core';

const BREAKPOINT = 768;

@Directive({
  selector: '[appFlexHeight]'
})
export class FlexHeightDirective {

  @Input() appFlexHeight: number | undefined = undefined;
  @Input() breakpoint?: number = BREAKPOINT;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const viewportWidth =
      document.documentElement.clientWidth || window.innerWidth;
    if (viewportWidth < BREAKPOINT && this.appFlexHeight) {
      this.el.nativeElement.style.height = this.appFlexHeight + 'px';
    }
  }
}
