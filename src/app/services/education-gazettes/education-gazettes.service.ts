import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { educationApi } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class EducationGazettesService {
  currentUrl = 'querido_diario/';
  itemsPerPage = 4;
  constructor(private http: HttpClient) {}

  getAllGazettes(filters: any, currPage: number) {
    return this.http.get(educationApi + this.currentUrl + `gazettes/?size=${this.itemsPerPage}&offset=${currPage * this.itemsPerPage}&` + filters);
  }
  
  getEntities() {
    return this.http.get(educationApi +  this.currentUrl + 'entities/');
  }

  getThemes() {
    return this.http.get(educationApi + this.currentUrl + 'subthemes/');
  }

  getAllCities() {
    return this.http.get(educationApi +  'cities?evels=3');
  }
}

