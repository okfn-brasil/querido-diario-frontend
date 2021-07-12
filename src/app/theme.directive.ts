import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[theme]',
})
export class ThemeDirective {
  @Input()
  theme: 'light' | 'dark' | 'lighter' | null = null;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    if (this.theme) {
      console.log('theme ', this.theme);
      console.log('element ', this.el);
      this.el.nativeElement.classList.add(this.theme);
    }
  }
}
