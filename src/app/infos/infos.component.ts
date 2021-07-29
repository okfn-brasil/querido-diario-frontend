import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.sass'],
})
export class InfosComponent implements OnInit {
  infos$: Observable<any> = of(null);

  icon = {
    file: 'right-arrow-white',
    height: 12,
    width: 12,
  };

  @Input()
  bg: 'bg-gray-square' | 'bg-purple-square' = 'bg-gray-square';

  @Input()
  theme: 'darker' | 'dark-secondary' | 'dark' | 'light' = 'darker';

  themeCard: 'darker' | 'dark-secondary' | 'dark' | 'light' | null =
    'dark-secondary';
  navTheme: string = '';

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.infos$ = this.contentService.find('home/infos');

    if (this.theme === 'darker') {
      this.themeCard = 'darker';
      this.navTheme = 'nav-dark';
    }
  }
}
