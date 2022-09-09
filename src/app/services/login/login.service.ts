import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/interfaces/account';

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

  getUserData() {
    return this.http.get(`https://staging.diariodoclima.jurema.la/api/accounts/users/me`);
  }

  updateUserData(userData: UserModel) {
    return this.http.patch(`https://staging.diariodoclima.jurema.la/api/accounts/users/me/`, userData);
  }
}
