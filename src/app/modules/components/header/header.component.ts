import { Component, ElementRef, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/interfaces/account';
import { IconType } from 'src/app/interfaces/icon';
import { NotificationsComponent } from 'src/app/modules/components/notifications/notifications.component';
import { ContentService } from 'src/app/services/content/content.service';
import { UserQuery } from 'src/app/stores/user/user.query';
import { UserService } from 'src/app/stores/user/user.service';
import { tokenKeys } from '../../pages/area-education/utils';
import { I18nService } from 'src/app/services/translation/i18n.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('notification') notification!: ElementRef;
  notificationPopoverRef: MatDialogRef<NotificationsComponent> | null = null;
  mobileMenuOpen = false;
  mobileNotificationsOpen = false;
  userData: UserModel = {};
  urlsHide = ['/educacao/cadastrar'];
  hideMenu = false;
  languageList = [
    { code: 'pt', label: 'Português (BR)' },
    { code: 'en', label: 'English (US)' }
  ];

  constructor(
    private userQuery: UserQuery,
    private modal: MatDialog,
    private contentService: ContentService,
    private userService: UserService,
    private router: Router,
    private I18nService: I18nService,
  ) {}

  notificationIcon: IconType = {
    file: 'bell',
    height: 36,
    width: 36,
  };

  ngOnInit(): void {
    this.contentService.find('notifications').subscribe((content: any) => {
      if (content.list.length) {
        this.notificationIcon = { ...this.notificationIcon, file: 'bell-span' };
      }
    });

    this.userQuery.userData$.subscribe(userData => {
      this.userData = userData;
    });

    this.router.events.subscribe(event => {
      if(this.urlsHide.includes(this.router.url)) {
        this.hideMenu = true;
      } else {
        this.hideMenu = false;
      }
    })
  }

  openDialog(): void {
   this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  openForm() {
    this.mobileMenuOpen = false;
    if(location.href.includes('educacao')) {
      this.userService.setLoginFormOpen(true);
    } else {
      this.router.navigate(['/educacao'], {queryParams: {login: 'open'}});
    }
  }

  onClickLink() {
    setTimeout(() => {
      this.mobileMenuOpen = false;
    }, 120);
  }

  onClickLogout() {
    localStorage.removeItem(tokenKeys.token);
    localStorage.removeItem(tokenKeys.refresh);
    this.userService.resetUser();
    this.router.navigate(['/educacao'], {queryParams: {login: 'open'}});
  }

  openNotifications(): void {
    const left = this.calculatePopoverPosition();
    this.notificationPopoverRef = this.modal.open(NotificationsComponent, {
      width: '414px',
      maxWidth: '100%',
      backdropClass: 'bg-transparent',
      position: {
        top: '40px',
        left: `${left}px`,
      },
    });

    this.modal.afterAllClosed.subscribe(() => {
      this.notificationPopoverRef = null;
    });
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    if (window.innerWidth < 600) {
      this.notificationPopoverRef?.close();
      return;
    }

    if (this.notificationPopoverRef) {
      this.notificationPopoverRef.close();
      this.openNotifications();
    }
  }

  private calculatePopoverPosition(): number {
    const notificationElement = this.notification.nativeElement;
    return notificationElement.offsetLeft - 340;
  }


  changeLanguage(language: string): void {
    this.I18nService.loadRouteTranslations(language);
  }

  openCaterseUrl(): void {
    window.open('https://www.catarse.me/queridodiario-okbr', '_blank');
  }

  openMobileNotifications() {
    this.mobileNotificationsOpen = !this.mobileNotificationsOpen;
  }
}
