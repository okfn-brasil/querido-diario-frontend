import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(`/assets/pages/blog.json`).pipe(
      map((data) => {
        return data;
      })
    );
  }
}
