import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { City } from 'src/app/interfaces/city';
import { CitiesService } from 'src/app/services/cities/cities.service';
import { ContentService } from 'src/app/services/content/content.service';

@Component({
  selector: 'app-available-cities',
  templateUrl: './available-cities.component.html',
  styleUrls: ['./available-cities.component.sass'],
})
export class AvailableCitiesComponent implements OnInit {
  content$: Observable<any> = of(null);
  cities: City[] = [];
  loading = true;

  constructor(
    private contentService: ContentService,
    private citiesService: CitiesService
  ) {}

  ngOnInit(): void {
    this.content$ = this.contentService.find('available-cities');

    this.citiesService.getAll().subscribe((response) => {
      this.loading = false;

      this.cities = response.cities.sort((cityA: City, cityB: City) =>
        cityA.territory_name.localeCompare(cityB.territory_name)
      );
    });
  }
}
