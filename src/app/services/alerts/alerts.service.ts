import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GazetteFilters } from 'src/app/interfaces/education-gazettes';
import { educationApi } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  constructor(private http: HttpClient) { }
  itemsPerPage = 6;

  postAlert(filters: GazetteFilters, query: string) {
    const newFilters = {
      query_string: query,
      territories: filters.territory_id && filters.territory_id.length? filters.territory_id : undefined,
      sub_themes: filters.subthemes && filters.subthemes.length? filters.subthemes : undefined,
      gov_entities: filters.entities && filters.entities.length? filters.entities : undefined,
    }
    return this.http.post(`${educationApi}alerts/`, newFilters);
  }

  getAlerts(page: number) {
    return this.http.get(`${educationApi}alerts?limit=${this.itemsPerPage}&offset=${page * this.itemsPerPage}`);
  }

  deleteAlert(id: string) { 
    return this.http.delete(`${educationApi}alerts/${id}`);
  }
}
