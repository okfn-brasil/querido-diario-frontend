import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/interfaces/account';
import { educationApi } from '../utils';

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
    return this.http.post(`${educationApi}token/`, newForm);
  }

  getUserData() {
    return this.http.get(`${educationApi}accounts/users/me`);
  }

  updateUserData(userData: UserModel) {
    return this.http.patch(`${educationApi}accounts/users/me/`, userData);
  }
}
