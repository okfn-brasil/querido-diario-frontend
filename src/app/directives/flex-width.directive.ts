import { Directive, ElementRef, Input } from '@angular/core';

const BREAKPOINT = 768;

@Directive({
  selector: '[appFlexWidth]',
})
export class FlexWidthDirective {
  @Input() appFlexWidth: number | string | undefined = '';
  @Input() breakpoint?: number = BREAKPOINT;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const viewportWidth =
      document.documentElement.clientWidth || window.innerWidth;
    if (viewportWidth < BREAKPOINT) {
      if (this.appFlexWidth && this.appFlexWidth !== '') {
        this.el.nativeElement.style.width = this.appFlexWidth + 'px';
      } else {
        this.el.nativeElement.style.width = this.appFlexWidth + '100%';
      }
    }
  }
}
