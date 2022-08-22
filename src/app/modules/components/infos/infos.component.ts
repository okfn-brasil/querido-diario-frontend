import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContentService } from 'src/app/services/content/content.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.sass'],
})
export class InfosComponent implements OnInit {
  @Input() page: string = '';
  infos$: Observable<any> = of(null);

  iconDarker = {
    file: 'white-arrow',
    height: 12,
    width: 12,
  };


  iconDark = {
    file: 'white-arrow-secondary',
    height: 12,
    width: 12,
  };

  icon = this.iconDark;

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
      this.icon = this.iconDarker;
    }
  }
}
