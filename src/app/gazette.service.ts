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

export interface GazetteQuery {
  term?: string;
  territory_id?: string;
  since?: string;
  until?: string;
  sort_by?: string;
  page?: number;
}

export interface GazetteResponse {
  total_gazettes: number;
  gazettes: Gazette[];
}

interface Pagination {
  size: number;
  offset: number;
}

@Injectable({
  providedIn: 'root',
})
export class GazetteService {
  constructor(private http: HttpClient) {}

  pagination(page: number): Pagination {
    return { size: 10, offset: (page - 1) * 10 };
  }

  findAll(query: GazetteQuery): Observable<GazetteResponse> {
    const { term, territory_id, since, until, sort_by, page } = query;
    let url = `https://queridodiario.ok.org.br/api/gazettes/${
      territory_id || ''
    }?`;

    if (term) {
      url += `keywords=${term}&`;
    }

    if (since) {
      url += `since=${since}&`;
    }

    if (until) {
      url += `until=${until}&`;
    }

    if (sort_by) {
      url += `sort_by=${sort_by}`; // default
    }

    if (page && page > 1) {
      const pagination: Pagination = this.pagination(page);
      url += `size=${pagination.size}&offset=${pagination.offset}&`;
    }

    return this.http.get<GazetteResponse>(url).pipe(
      map((res: GazetteResponse) => {
        return res;
      })
    );
  }
}
