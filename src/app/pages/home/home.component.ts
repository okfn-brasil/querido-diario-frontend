import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { VideoModalComponent } from 'src/app/components/video-modal/video-modal.component';
import {
  ACCESS_LEVEL_LIST,
  EVOLUTION_LIST,
  GOAL_LIST,
  HELP_LIST,
  SEARCH_FORM,
} from 'src/app/data/home';

const FOLLOW = {
  theme: 'bg-purple-1',
  type: 'list',
  gap: 62,
  layout: 'row',
  layoutAlign: 'center',
  content: [
    {
      type: 'h1',
      content: 'Acompanhe a evolução do Querido Diário',
    },
    {
      type: 'list',
      layout: 'row',
      layoutAlign: 'space-between',
      content: of(EVOLUTION_LIST),
    },
    {
      type: 'link',
      text: 'Conheça os níveis de acesso',
      link: '/acesso',
      icon: {
        file: 'white-arrow',
        height: 12,
        width: 12,
      },
    },
  ],
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  evolution: Observable<any[]> = of(EVOLUTION_LIST);
  help: Observable<any[]> = of(HELP_LIST);
  goals: Observable<any[]> = of(GOAL_LIST);
  access_levels: Observable<any[]> = of(ACCESS_LEVEL_LIST);
  searchForm: Observable<any> = of(SEARCH_FORM);
  follow: any = FOLLOW;

  constructor(private modal: MatDialog) {}

  ngOnInit() {}

  openVideo(): void {
    this.modal.open(VideoModalComponent, {
      width: '100%',
      height: '100%',
      maxWidth: '100%',
    });
  }
}
