import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { EducationQuotation } from 'src/app/interfaces/education-quotation';
import { educationApi } from '../utils';

@Injectable({
  providedIn: 'root',
})
export class EducationQuotationService {
  constructor(private http: HttpClient) {}

  createQuotation(data: EducationQuotation): Observable<void> {
    return this.http.post<void>(`${educationApi}reports/quotation/`, data);
  }
}
