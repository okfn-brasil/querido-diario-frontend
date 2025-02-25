import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  constructor(private translate: TranslateService, private route: ActivatedRoute) {}


  loadRouteTranslations(language: string): void {
    const currentRoute = this.route.snapshot.routeConfig?.path || 'home';
    const routeTranslationPath = `assets/i18n/${language}/${currentRoute}.json`;
    const globalTranslationPath = `assets/i18n/${language}/global.json`;

    this.translate.setTranslation(language, {}, true);

    Promise.all([
      fetch(globalTranslationPath).then((res) => res.json()).catch(() => ({})),
      fetch(routeTranslationPath).then((res) => res.json()).catch(() => ({}))
    ])
      .then(([commonTranslations, routeTranslations]) => {
        this.translate.getTranslation(language).subscribe((existingTranslations) => {
          const combinedTranslations = {
            ...existingTranslations,
            ...commonTranslations,
            ...routeTranslations
          };


          this.translate.setTranslation(language, combinedTranslations, true);
        });
      })
      .catch((error) => {
        console.error('Error loading translations:', error);
      });

    this.translate.use(language);
  }
}
