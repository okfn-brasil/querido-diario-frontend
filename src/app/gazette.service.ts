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
    if (page > 1) {
      return { size: 10, offset: page * 10 };
    }
    return { size: 10, offset: 0 };
  }

  findAll(query: GazetteQuery): Observable<GazetteResponse> {
    console.log('find by query ', query);

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

    console.log('sort_by ', sort_by);
    if (sort_by) {
      if (sort_by === 'Mais recentes') {
        url += 'sort_by=descending_date&'; // default
      }

      if (sort_by === 'Mais antigos') {
        url += 'sort_by=ascending_date&';
      }

      if (sort_by === 'Relevâncis') {
        url + 'sort_by=relevance&';
      }
    }

    if (page && page > 1) {
      const pagination: Pagination = this.pagination(page);
      url += `size=${pagination.size}&offset=${pagination.offset}&`;
    }

    // @todo pass query string as object to get
    console.log('url ', url);
    return this.http.get<GazetteResponse>(url).pipe(
      map((res: GazetteResponse) => {
        return res;
      })
    );
  }
}
