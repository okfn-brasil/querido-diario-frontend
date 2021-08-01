import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import moment, { Moment } from 'moment';

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
      updatedAt: this.formatDate('2021/07/31'),
      isNew: true,
    },
    {
      title: 'Nova atualização',
      content:
        'Nulla mattis risus at rutrum imperdiet. Sed sed nibh tortor. Aliquam ultricies elit eu fringilla ullamcorper.',
      updatedAt: this.formatDate('2021/07/31'),
      isNew: true,
    },
    {
      title: 'Nova atualização',
      content:
        'Nulla mattis risus at rutrum imperdiet. Sed sed nibh tortor. Aliquam ultricies elit eu fringilla ullamcorper.',
      updatedAt: this.formatDate('2021/07/31'),
      isNew: false,
    },
  ];

  payload = {
    hasNew: true,
    notifications: this.notifications,
  }

  ngOnInit(): void {}

  formatDate(date: string) {
    const _date = new Date(date)
    return moment(_date).locale("pt-br").fromNow().toUpperCase(); 
  }
}
