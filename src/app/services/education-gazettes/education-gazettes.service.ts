import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducationGazettesService {
  currentUrl = 'querido_diario/';
  constructor(private http: HttpClient) {}

  getAllGazettes(filters: any, currPage: number) {
    return this.http.get(`https://staging.diariodoclima.jurema.la/api/` + this.currentUrl + 'gazettes/?size=4&');
  }
  
  getEntities() {
    return this.http.get(`https://staging.diariodoclima.jurema.la/api/` + this.currentUrl + 'entities/');
  }

  getThemes() {
    return this.http.get(`https://staging.diariodoclima.jurema.la/api/` + this.currentUrl + 'subthemes/');
  }

  getAllCities() {
    return this.http.get('https://staging.diariodoclima.jurema.la/api/cities?evels=3');
  }
}

