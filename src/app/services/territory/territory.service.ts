import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { API } from 'src/app/constants';
import { Territory } from 'src/app/interfaces/territory';

@Injectable({
  providedIn: 'root',
})
export class TerritoryService {
  public currentTerritory: Territory | undefined = undefined;

  private territory = new Subject<Territory>();
  territory$ = this.territory.asObservable();

  constructor(private http: HttpClient) {}

  findOne(params: { territoryId: string }): Observable<Territory> {
    const url = `${API}/cities/${params.territoryId}`
    return this.http.get<{ city: Territory }>(url).pipe(
      map((res: { city: Territory }) => {
        return this.appendState(res.city)
      })
    );
  }

  findByName(name: string): Observable<Territory[]> {
    const url = `${API}/cities?city_name=` + name;

    return this.http.get<{ cities: [] }>(url).pipe(
      map((res: { cities: [] }) => {
        return res.cities.map((territory) => this.appendState(territory) );
      })
    );
  }

  select(territoryName: string): void {
    const filterValue = territoryName.toLowerCase();
    this.findByName(filterValue)
      .subscribe((data: Territory[]) => {
        const currentTerritory = data[0];
        this.territory.next(currentTerritory);
      })
      .unsubscribe();
  }

  appendState(territory: Territory): Territory {
    return { ...territory, territory_label: `${territory.territory_name} (${territory.state_code})`}
  }
}
