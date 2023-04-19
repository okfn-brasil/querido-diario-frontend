import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { ContentService } from 'src/app/services/content/content.service';
import { VideoModalComponent } from '../../components/video-modal/video-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  content$: Observable<any> = of(null)

  constructor(
    private modal: MatDialog,
    private contentService: ContentService
  ) {
  }

  ngOnInit() {
   this.content$ = this.contentService.find('home');
  }

  openVideo(): void {
    this.modal.open(VideoModalComponent, {
      width: '100%',
      height: '100%',
      maxWidth: '100%',
    });
  }
}
