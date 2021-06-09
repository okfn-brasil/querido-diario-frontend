import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import cities from '../data/cities.json';
import { City } from '../interfaces/city';

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

  findOne(name: string): Observable<City | null> {
    const territory = cities.find(
      (city: City) => city.territory_name.toLowerCase() === name
    );
    console.log('find one ', cities[0]);
    return of(territory || cities[0]);
  }
}
