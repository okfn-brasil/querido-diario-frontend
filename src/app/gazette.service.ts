import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Gazette {
  territory_id: string;
  date: string;
  url: string;
  territory_name: string;
  state_code: string;
  highlight_texts: string[];
  edition: string;
  is_extra_edition: boolean;
  file_raw_txt: string;
}

export interface GazetteResponse {
  total_gazettes: number;
  gazettes: Gazette[];
}

@Injectable({
  providedIn: 'root',
})
export class GazetteService {
  constructor(private http: HttpClient) {}

  findAll(territoryId: string): Observable<GazetteResponse> {
    const url = `https://queridodiario.ok.org.br/api/gazettes/${territoryId}?keywords=test`;
    return this.http.get<GazetteResponse>(url).pipe(
      map((res: GazetteResponse) => {
        return res;
      })
    );
  }
}
