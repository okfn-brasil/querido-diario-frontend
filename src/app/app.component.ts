import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Icons } from './data/icons';

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
        icon,
        this.sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${icon}.svg`)
      )
    })
  }
}
