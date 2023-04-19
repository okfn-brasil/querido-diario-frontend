import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from 'src/app/constants';
import { Suggestion } from 'src/app/interfaces/suggestion';

@Injectable({
  providedIn: 'root',
})
export class SuggestionService {
  constructor(private http: HttpClient) {}

  save(data: Suggestion): Observable<any> {
    return this.http.post(`${API}/suggestions`, data)
  }
}
