import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContentService } from 'src/app/services/content/content.service';

@Component({
  selector: 'app-available-cities',
  templateUrl: './available-cities.component.html',
  styleUrls: ['./available-cities.component.sass']
})
export class AvailableCitiesComponent implements OnInit {
  content$: Observable<any> = of(null);

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.content$ = this.contentService.find('available-cities');  
  }

}

