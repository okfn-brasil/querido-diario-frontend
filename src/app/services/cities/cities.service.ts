import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { API } from 'src/app/constants';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  getAllObservableCache: Observable<any> | null = null;
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  getAll(): Observable<any> {
    if (!this.getAllObservableCache)
      this.getAllObservableCache = this.http.get(`${API}/cities?levels=3`).pipe(
        map((data) => {
          return data;
        }),
        shareReplay(1),
        catchError((error) => {
          console.error(error);
          this.snackBar.open(
            'Houve um erro buscando as cidades disponíveis! Tente novamente mais tarde.',
            'Fechar'
          );
          return of({ cities: [] });
        })
      );

    return this.getAllObservableCache;
  }
}
