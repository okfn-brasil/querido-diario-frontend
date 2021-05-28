import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

interface City {
  territory_name: string;
}

interface CityResponse {
  cities: City[]
}

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  private cities = new Subject<City[]>();
  cities$ = this.cities.asObservable();

  constructor(private http: HttpClient) { }

  findByName(name: string): Observable<City[]> {
    const url = `https://queridodiario.ok.org.br/api/cities/?city_name=` + name

    return this.http.get<CityResponse>(url)
      .pipe(
        map((res: CityResponse) => {
          return res.cities;
        })
      )
  }
}
