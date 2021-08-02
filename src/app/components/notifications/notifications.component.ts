import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import moment from 'moment';
import { Observable, of } from 'rxjs';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class NotificationsComponent implements OnInit {
  constructor(private contentService: ContentService) {}

  content$: Observable<any> = of(null);

  ngOnInit(): void {
    this.contentService.find('notifications').subscribe((content: any) => {
      this.content$ = of({
        ...content,
        list: content.list.map((notification: any) => ({
          ...notification,
          updatedAt: this.formatDate(notification.updatedAt),
        })),
      });
    });
  }

  formatDate(date: string) {
    const _date = new Date(date);
    return moment(_date).locale('pt-br').fromNow().toUpperCase();
  }
}
