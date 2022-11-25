import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHeight]',
})
export class HeightDirective {
  @Input() appHeight: number = 0;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.appHeight) {
      this.el.nativeElement.style.height = this.appHeight + 'px';
    }
  }
}
