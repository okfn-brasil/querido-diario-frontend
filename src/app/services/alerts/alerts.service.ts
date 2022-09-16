import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GazetteFilters } from 'src/app/interfaces/education-gazettes';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  constructor(private http: HttpClient) { }
  itemsPerPage = 6;

  postAlert(filters: GazetteFilters, query: string) {
    const newFilters = {
      query_string: query,
      territory_id: filters.local && filters.local.length? filters.local : undefined,
      sub_themes: filters.subthemes && filters.subthemes.length? filters.subthemes : undefined,
      gov_entities: filters.entities && filters.entities.length? filters.entities : undefined,
    }
    return this.http.post(`https://api.queridodiario.jurema.la/api/alerts/`, newFilters);
  }

  getAlerts(page: number) {
    return this.http.get(`https://api.queridodiario.jurema.la/api/alerts?limit=${this.itemsPerPage}&offset=${page * this.itemsPerPage}`);
  }

  deleteAlert(id: string) { 
    return this.http.delete(`https://api.queridodiario.jurema.la/api/alerts/${id}`);
  }
}
