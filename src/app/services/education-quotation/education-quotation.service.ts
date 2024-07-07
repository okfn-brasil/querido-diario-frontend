import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from 'src/app/constants';
import { EducationQuotation } from 'src/app/interfaces/education-quotation';

@Injectable({
  providedIn: 'root',
})
export class EducationAnalysisQuotationService {
  constructor(private http: HttpClient) {}

  save(data: EducationQuotation): Observable<any> {
    return this.http.post(`${API}/educacao/pedido-analise`, data)
  }
}
