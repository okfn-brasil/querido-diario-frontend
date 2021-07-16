import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor(private http: HttpClient) {}

  content$: Observable<any> = of(null)

  find(pageName: string): Observable<any> {
    return this.http.get(`/assets/pages/${pageName}.json`).pipe(
      map((data) => {
        console.log(data)
        return data;
      })
    );
  }
}

/*
ComponentConfigService
*/
