import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/interfaces/account';
import { IconType } from 'src/app/interfaces/icon';
import { NotificationsComponent } from 'src/app/modules/components/notifications/notifications.component';
import { ContentService } from 'src/app/services/content/content.service';
import { UserQuery } from 'src/app/stores/user/user.query';
import { UserService } from 'src/app/stores/user/user.service';
import { tokenKeys } from '../../pages/area-education/utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('explore') explore!: ElementRef;
  mobileMenuOpen = false;
  userData: UserModel = {};
  urlsHide = ['/educacao/cadastrar'];
  hideMenu = false;

  constructor(
    private userQuery: UserQuery,
    private modal: MatDialog,
    private contentService: ContentService,
    private userService: UserService,
    private router: Router,
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
    const left = this.explore.nativeElement.offsetLeft + 144; // important
    this.modal.open(NotificationsComponent, {
      width: '414px',
      maxWidth: '100%',
      backdropClass: 'bg-transparent',
      position: {
        top: '40px',
        left: left + 'px',
      },
    });
  }
}
