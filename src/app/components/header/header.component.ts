import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { ContentService } from 'src/app/services/content.service';
import { Icon } from 'src/app/types/icon';
import { ModalComponent } from '../modal/modal.component';
import { NotificationsComponent } from '../notifications/notifications.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('explore') explore!: ElementRef;

  constructor(
    private modal: MatDialog,
    private contentService: ContentService
  ) {}

  notificationIcon: Icon = {
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
  }

  openDialog(): void {
    this.modal.open(ModalComponent, {
      width: '100%',
      height: '100%',
      maxWidth: '100%',
    });
  }

  openNotifications(): void {
    const left = this.explore.nativeElement.offsetLeft + 40;
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
