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
import { FOLLOW } from 'src/app/shared/follow';
import { SUPPORT } from 'src/app/shared/support';

/*const SUPPORT = {
  theme: 'bg-purple-2',
  type: 'section',
  gap: 34,
  layout: 'column',
  content: of([
    {
      type: 'h1',
      content: 'Precisamos do seu apoio',
    },
    {
      type: 'list',
      layout: 'column',
      layoutAlign: 'space-between',
      content: of(HELP_LIST)
    }
  ])
}*/

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
  sections: any[] = [FOLLOW, SUPPORT]

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
