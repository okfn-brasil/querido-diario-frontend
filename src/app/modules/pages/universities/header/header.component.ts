import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

interface NavItem {
  route: string;
  label: string;
  mobileLabel?: string;
  exact?: boolean;
}

@Component({
  selector: 'uni-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderUniversitiesComponent {
  menuOpen = false;
  currentRoute = '';

  navItems: NavItem[] = [
    {
      route: '/universidades',
      label: 'Querido Diário nas Universidades',
    },
    {
      route: '/universidades/como-fazer-parte',
      label: 'Como fazer parte'
    },
    {
      route: '/universidades/base-de-conhecimento',
      label: 'Base de Conhecimento'
    },
    {
      route: '/universidades/historico',
      label: 'Histórico do Programa'
    }
  ];

  constructor(private router: Router) {
    this.currentRoute = this.router.url;
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(event => {
        this.currentRoute = event.urlAfterRedirects;
      });
  }

  get currentSection(): NavItem {
    const found = this.navItems.find(item => this.currentRoute === item.route);
    return found || this.navItems[0];
  }
}
