import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Theme } from 'src/app/interfaces/gazette';

@Component({
  selector: 'edu-themes-filter',
  templateUrl: './themes-filter.component.html',
  styleUrls: ['./themes-filter.component.sass']
})
export class ThemesFilterComponent implements OnChanges {
  selectedThemes: Theme = {};
  showMoreThemes = false;
  @Input() isModal = false;
  @Input() themes: string[] = [];
  @Input() initialThemes: string[] = [];
  @Output() themesChange: EventEmitter<string[]> = new EventEmitter();
  
  constructor(
  ) { }

  ngOnChanges(): void {
    if(this.initialThemes && !Array.isArray(this.initialThemes)) {
      this.initialThemes = [this.initialThemes]
    }
    if(this.initialThemes && this.initialThemes.length) {
      this.initialThemes.forEach(theme => {
        this.selectedThemes[theme] = true;
      });
    }
  }

  selectTheme(theme: string) {
    this.selectedThemes[theme] = !this.selectedThemes[theme];
    this.themesChange.emit(Object.keys(this.selectedThemes).filter(key => !!this.selectedThemes[key]));
  }

  setShowMoreThemes() {
    this.showMoreThemes = !this.showMoreThemes;
  }

  getThemes() {
    return this.themes.sort((itemA: string, itemB: string) => {
    return (!!this.selectedThemes[itemA] === !!this.selectedThemes[itemB])? 0 : this.selectedThemes[itemA]? -1 : 1})
      .slice(0, this.showMoreThemes ? this.themes.length + 1 : 6);
  }
}
