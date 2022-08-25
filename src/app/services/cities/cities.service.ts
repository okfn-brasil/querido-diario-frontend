import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(`https://queridodiario.ok.org.br/api/cities?evels=3`).pipe(
      map((data) => {
        return data;
      })
    );
  }
}
