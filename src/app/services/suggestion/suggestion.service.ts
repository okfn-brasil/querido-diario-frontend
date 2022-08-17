import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Suggestion } from 'src/app/interfaces/suggestion';

// @todo extract to config
const API = 'https://queridodiario.ok.org.br/api';

@Injectable({
  providedIn: 'root',
})
export class SuggestionService {
  constructor(private http: HttpClient) {}

  save(data: Suggestion): Observable<any> {
    return this.http.post(`${API}/suggestions`, data)
  }
}
