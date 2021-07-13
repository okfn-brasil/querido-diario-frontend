import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { VideoModalComponent } from 'src/app/components/video-modal/video-modal.component';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  evolution$: Observable<any> = of(null);
  help$: Observable<any> = of(null);
  goals$: Observable<any> = of(null)
  realization$: Observable<any> = of(null)
  /*help: Observable<any[]> = of(HELP_LIST);
  goals: Observable<any[]> = of(GOAL_LIST);
  access_levels: Observable<any[]> = of(ACCESS_LEVEL_LIST);
  searchForm: Observable<any> = of(SEARCH_FORM);
  follow: any = FOLLOW;
  sections: any[] = [];*/

  constructor(private modal: MatDialog, private homeService: HomeService) {}

  ngOnInit() {
    this.evolution$ = this.homeService.loadEvolution();
    this.help$ = this.homeService.loadHelp();
    this.goals$ = this.homeService.loadGoals();
    this.realization$ = this.homeService.loadRealization()
  }

  openVideo(): void {
    this.modal.open(VideoModalComponent, {
      width: '100%',
      height: '100%',
      maxWidth: '100%',
    });
  }
}
