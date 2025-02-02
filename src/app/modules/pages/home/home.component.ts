import { Component, OnInit } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { Observable, forkJoin, of } from 'rxjs';
import { ContentService } from 'src/app/services/content/content.service';
import { VideoModalComponent } from '../../components/video-modal/video-modal.component';
import { CitiesService } from 'src/app/services/cities/cities.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  content$: Observable<any> = of(null);
  numberOfCities = 0;

  constructor(
    private modal: MatDialog,
    private contentService: ContentService,
    private citiesService: CitiesService
  ) {}

  ngOnInit() {
    this.content$ = forkJoin({
      content: this.contentService.find('home'),
      cardsUseCases: this.contentService.find('use-cases'),
      cardsMediaImpact: this.contentService.find('media-impact'),
      numberOfCities: this.citiesService.getAll(),
    }).pipe(
      map((data) => {
        data.content.evolution.items[0]['count'] =
          data.numberOfCities.cities.length;
        data.content.useCases['items'] = data.cardsUseCases.useCases;
        data.content.mediaImpact['items'] = data.cardsMediaImpact.mediaImpact;
        return data.content;
      })
    );
  }

  openVideo(): void {
    this.modal.open(VideoModalComponent, {
      width: '100%',
      height: '100%',
      maxWidth: '100%',
    });
  }
}
