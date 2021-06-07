import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appWidth]',
})
export class WidthDirective {
  @Input() appWidth: number = 0;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.appWidth) {
      this.el.nativeElement.style.width = this.appWidth + 'px';
    }
  }
}
