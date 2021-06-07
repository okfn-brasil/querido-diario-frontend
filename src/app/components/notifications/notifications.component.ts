import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.sass'],
  encapsulation: ViewEncapsulation.None 
})
export class NotificationsComponent implements OnInit {
  constructor() {}

  notifications = [
    {
      title: 'Nova atualização',
      content:
        'Nulla mattis risus at rutrum imperdiet. Sed sed nibh tortor. Aliquam ultricies elit eu fringilla ullamcorper.',
      updatedAt: 'Há 1 dia',
      isNew: true,
    },
    {
      title: 'Nova atualização',
      content:
        'Nulla mattis risus at rutrum imperdiet. Sed sed nibh tortor. Aliquam ultricies elit eu fringilla ullamcorper.',
      updatedAt: 'Há 1 dia',
      isNew: true,
    },
    {
      title: 'Nova atualização',
      content:
        'Nulla mattis risus at rutrum imperdiet. Sed sed nibh tortor. Aliquam ultricies elit eu fringilla ullamcorper.',
      updatedAt: 'Há 1 dia',
      isNew: false,
    },
  ];

  payload = {
    hasNew: true,
    notifications: this.notifications,
  }

  ngOnInit(): void {}
}
