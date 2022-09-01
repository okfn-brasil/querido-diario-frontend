import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(form: {email: string, password: string}): Observable<any> {
    const newForm = {
      email: form.email,
      password: form.password,
    };
    return this.http.post(`https://staging.diariodoclima.jurema.la/api/token/`, newForm);
  }
}
