import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Icons } from './data/icons';
import { I18nService } from './services/translation/i18n.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'querido-diario-frontend';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private I18nService: I18nService) {
    this.registerIcons(sanitizer);

  }

  ngOnInit(): void {
    const defaultLanguage = 'pt';
    this.I18nService.loadRouteTranslations(defaultLanguage);
  }

  registerIcons(sanitizer: DomSanitizer): void {
    Icons.map((icon) => {
      this.matIconRegistry.addSvgIcon(
        icon,
        this.sanitizer.bypassSecurityTrustResourceUrl(`../assets/icons/${icon}.svg`)
      )
    })
  }
}
