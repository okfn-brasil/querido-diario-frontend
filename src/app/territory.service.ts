import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
export interface Territory {
  territory_id: string;
  territory_name: string;
  state_code: string;
  publication_urls: string[];
  level: string;
}

@Injectable({
  providedIn: 'root',
})
export class TerritoryService {
  public currentTerritory: Territory | undefined = undefined;

  private territory =  new Subject<Territory>();
  territory$ = this.territory.asObservable();


  constructor(private http: HttpClient) {}

  findByName(name: string): Observable<Territory[]> {
    const url = `https://queridodiario.ok.org.br/api/cities/?city_name=` + name;
    console.log('url ', url)

    return this.http.get<{ cities: [] }>(url).pipe(
      map((res: { cities: [] }) => {
        return res.cities;
      })
    );
  }

  select(territoryName: string): void {
    const filterValue = territoryName.toLowerCase();
    this.findByName(filterValue).subscribe((data: Territory[]) => {
      const currentTerritory = data[0];
      this.territory.next(currentTerritory)
      //console.log('current territory ', this.currentTerritory)
    });
  }
}
