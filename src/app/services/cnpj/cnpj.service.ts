import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { CNPJPartnerResponse, CNPJResponse } from 'src/app/interfaces/cnpj';
import { educationApi } from '../utils';

@Injectable({
  providedIn: 'root',
})
export class CnpjService {
  constructor(private http: HttpClient) {}

  getCnpj(id: string) {
    return this.http.get<CNPJResponse>(`${educationApi}querido_diario/cnpjs/${id}`).pipe(
      map((res: CNPJResponse) => {
        return res as CNPJResponse;
      })
    );
  }

  getCnpjPartners(id: string) {
    return this.http.get<CNPJPartnerResponse>(`${educationApi}querido_diario/cnpjs/${id}/partners`).pipe(
      map((res: CNPJPartnerResponse) => {
        return res as CNPJPartnerResponse;
      })
    );
  }
}
