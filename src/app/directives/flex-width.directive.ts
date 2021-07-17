import { Directive, ElementRef, Input } from '@angular/core';

const BREAKPOINT = 768;

@Directive({
  selector: '[appFlexWidth]',
})
export class FlexWidthDirective {
  @Input() appFlexWidth: number | undefined = undefined;
  @Input() breakpoint?: number = BREAKPOINT;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const viewportWidth =
      document.documentElement.clientWidth || window.innerWidth;
    if (viewportWidth < BREAKPOINT && this.appFlexWidth) {
      this.el.nativeElement.style.width = this.appFlexWidth + 'px';
    }
  }
}
