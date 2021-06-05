import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { getLevelDescription, termsResult } from 'src/app/data/search';
import { City } from 'src/app/interfaces/city';
import { CitiesService } from 'src/app/services/cities.service';
interface SearchResult {
  text: string;
  city: string;
  updatedAt: string;
  downloadUrl: string;
}

interface SearchResponse {
  count: number;
  results: SearchResult[];
}

interface LevelDescription {
  text: string;
  button?: {
    text: string;
    href: string;
  };
}
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
})
export class SearchComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private citiesService: CitiesService
  ) {}
  term: string | null = null;
  cityName: string | null = null;
  foundResult: boolean = false;
  response: Observable<SearchResponse> = new Observable();
  city: Observable<City | null> = new Observable();
  levelDescription: LevelDescription | null = null;

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const { term, city } = params;
      this.term = term;
      this.cityName = city;
      if (city) {
        this.city = this.findTerritory(city);
      } else {
        this.response = this.findByTerm(term);
      }
    });
  }

  getLevelDescriptionForTerritory(level: string): LevelDescription {
    return getLevelDescription(level);
  }

  private findTerritory(value: string): Observable<City | null> {
    const filterValue = value.toLowerCase();
    return this.citiesService
      .findOne(filterValue)
      .pipe(map((result) => result));
  }

  findByTerm(term: string): Observable<SearchResponse> {
    const results = termsResult.filter(
      (result) => result.text.indexOf(term) > -1
    );

    return of({ count: results.length, results });
  }
}
