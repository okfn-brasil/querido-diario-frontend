import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { ContentService } from 'src/app/services/content/content.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent  implements OnInit {
  copyright$: Observable<any> = of(null)
  navigation$: Observable<any> = of(null)
  social$: Observable<any> = of(null)
  footerItems: any[] = [];
  copyrightTexts: string[] = [];

  constructor(
    private contentService: ContentService,
    private translateService: TranslateService
  ) { }

  ngOnInit(): void {
    this.translateService.stream('footer.items').subscribe((items) => {
      if (Array.isArray(items)) {
        this.footerItems = items;
      }
    });

    this.translateService.stream('footer.copyright.texts').subscribe((texts) => {
      if (Array.isArray(texts)) {
        this.copyrightTexts = texts;
      }
    });

    this.navigation$ = this.contentService.find('footer/navigation');
    this.copyright$ = this.contentService.find('footer/copyright');
    this.social$ = this.contentService.find('footer/social');
  }
}
