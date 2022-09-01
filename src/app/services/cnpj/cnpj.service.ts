import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { CNPJPartnerResponse, CNPJResponse } from 'src/app/interfaces/cnpj';

@Injectable({
  providedIn: 'root',
})
export class CnpjService {
  constructor(private http: HttpClient) {}

  getCnpj(id: string) {
    return this.http.get<CNPJResponse>(`https://staging.diariodoclima.jurema.la/api/querido_diario/cnpjs/${id}`).pipe(
      map((res: CNPJResponse) => {
        return res as CNPJResponse;
      })
    );
  }

  getCnpjPartners(id: string) {
    return this.http.get<CNPJPartnerResponse>(`https://staging.diariodoclima.jurema.la/api/querido_diario/cnpjs/${id}/partners`).pipe(
      map((res: CNPJPartnerResponse) => {
        return res as CNPJPartnerResponse;
      })
    );
  }
}
