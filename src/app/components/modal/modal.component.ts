import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContentService } from 'src/app/services/content.service';
import { Icon } from 'src/app/types/icon';
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

  notificationIcon: Icon = {
    file: 'bell',
    height: 36,
    width: 36,
  };

  ngOnInit(): void {
    this.contentService.find('notifications').subscribe((content: any) => {
      if (content.hasNew) {
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
