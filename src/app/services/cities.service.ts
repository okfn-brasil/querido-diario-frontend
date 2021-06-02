import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import cities from '../data/cities.json';

interface City {
  territory_id: string;
  territory_name: string;
  state_code: string;
  publication_urls?: string[],
  level: string;
}

interface CityResponse {
  cities: City[];
}

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  private cities = new Subject<City[]>();
  cities$ = this.cities.asObservable();

  constructor(private http: HttpClient) {}

  findByName(name: string): Observable<City[]> {
    const url = `https://queridodiario.ok.org.br/api/cities/?city_name=` + name;

    //return of(cities);

    return this.http.get<CityResponse>(url)
      .pipe(
        map((res: CityResponse) => {
          return res.cities;
        })
      )
  }
}
