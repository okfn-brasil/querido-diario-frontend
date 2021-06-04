import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotificationsComponent } from '../notifications/notifications.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass'],
})
export class ModalComponent implements OnInit {
  constructor(private modal: MatDialog) {}

  ngOnInit(): void {}

  openNotifications(): void {
    this.modal.open(NotificationsComponent, {
      maxWidth: '100%',
      width: '100%',
      height: '100%'
    });
  }
}
