import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[theme]',
})
export class ThemeDirective {
  @Input()
  theme: 'darker' | 'dark-secondary' | 'dark' | 'light' | null = null;


  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    if (this.theme) {
      this.el.nativeElement.classList.add(this.theme);
    }
  }
}
