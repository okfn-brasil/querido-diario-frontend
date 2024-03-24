import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { API } from 'src/app/constants';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  getAllObservableCache: Observable<any> | null = null;
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    if (!this.getAllObservableCache)
      this.getAllObservableCache = this.http.get(`${API}/cities?levels=3`).pipe(
        map((data) => {
          return data;
        }),
        shareReplay(1)
      );

    return this.getAllObservableCache;
  }
}
