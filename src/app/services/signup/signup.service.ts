import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { RegistrationModel, RegistrationResponse } from 'src/app/interfaces/account';
import { educationApi } from '../utils';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  constructor(private http: HttpClient) {}

  post(form: RegistrationModel) {
    const newForm = {
      email: form.email,
      password: form.password,
      city: form.city,
      full_name: form.name,
      state: form.state,
      sector: form.area,
      gender: "M" // remover
    };
    return this.http.post<RegistrationResponse>(`${educationApi}accounts/users/`, newForm).pipe(
      map((res: RegistrationResponse) => {
        return res as RegistrationResponse;
      })
    );
  }

  checkEmail(email: string) {
    return this.http.get<RegistrationResponse>(`${educationApi}accounts/users/email/${email}/`).pipe(
      map((res: RegistrationResponse) => {
        return res as RegistrationResponse;
      })
    );
  }
}
