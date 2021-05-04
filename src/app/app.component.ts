import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const Icons: string[] = [
  '../assets/icons/search.svg',
  '../assets/icons/dev.svg',
  '../assets/icons/ok-hand.svg',
  '../assets/icons/pin.svg',
  '../assets/icons/document.svg',
  '../assets/icons/check.svg',
  '../assets/icons/box.svg',
  '../assets/icons/project.svg',
  '../assets/icons/computer.svg',
  '../assets/icons/graphics.svg',

  '../assets/icons/logo-Ilda.svg',
  '../assets/icons/logo-embaixadores.svg',
  '../assets/icons/logo-jurema.svg',
  '../assets/icons/logo-serenata.svg',
  '../assets/icons/logo-OK.svg',
  '../assets/icons/logo-digitalocean.svg',

  '../assets/icons/bitmap.svg',
  '../assets/icons/circle-person.svg',

  '../assets/icons/twitter.svg',
  '../assets/icons/instagram.svg',
  '../assets/icons/facebook.svg',
  '../assets/icons/linkedin.svg',

  '../assets/icons/right-arrow.svg',
  '../assets/icons/right-arrow-white.svg',
  '../assets/icons/right-arrow-purple.svg',

  '../assets/icons/logo.svg',
  '../assets/icons/notification.svg',

  '../assets/icons/search-form.svg',
  '../assets/icons/play.svg',

  '../assets/icons/white-arrow.svg',

  '../assets/icons/bars.svg',
  
  '../assets/icons/close.svg',

  '../assets/icons/search-gray.svg',
  
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'querido-diario-frontend';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer) {
    this.registerIcons(sanitizer);
  }

  registerIcons(sanitizer: DomSanitizer): void {
    Icons.map((icon) => {
      this.matIconRegistry.addSvgIcon(
        icon.split('/')[3].split('.')[0],
        this.sanitizer.bypassSecurityTrustResourceUrl(icon)
      )
    })
  }
}
