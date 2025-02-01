import { Component, OnInit } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { IconType } from 'src/app/interfaces/icon';
import { ContentService } from 'src/app/services/content/content.service';
import { NotificationsComponent } from '../notifications/notifications.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass'],
})
export class ModalComponent implements OnInit {
  constructor(
    private modal: MatDialog,
    private contentService: ContentService
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
  }

  openNotifications(): void {
    this.modal.open(NotificationsComponent, {
      maxWidth: '100%',
      width: '100%',
      height: '100%',
    });
  }
}
