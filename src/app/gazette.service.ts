import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

enum DownloadsLabels {
  TXT = 'Baixar txt',
  ORIGINAL = 'Baixar arquivo original',
}

interface Download {
  value: string;
  viewValue: DownloadsLabels,
}
export interface Gazette {
  territory_id: string;
  date: string;
  url: string;
  territory_name: string;
  state_code: string;
  excerpts: string[];
  edition: string;
  is_extra_edition: boolean;
  txt_url?: string;
  downloads: Download[]
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

  resolveGazetteDownloads(gazette: Gazette): Gazette {
    const downloads: Download[] = [];
    if (gazette.txt_url) {
      downloads.push({ value: gazette.txt_url, viewValue: DownloadsLabels.TXT })
    }
    downloads.push({ value: gazette.url, viewValue: DownloadsLabels.ORIGINAL })

    return { ...gazette, downloads }
  }

  resolveGazettes(res: GazetteResponse): GazetteResponse {
    const gazettes = res.gazettes.map((gazette: Gazette) => this.resolveGazetteDownloads(gazette))
    return { ...res, gazettes }
  }

  findAll(query: GazetteQuery): Observable<GazetteResponse> {
    const { term, territory_id, since, until, sort_by, page } = query;
    let queryParams = {};

    if (territory_id) {
      queryParams = { ...queryParams, territory_id: territory_id };
    }

    if (term) {
      queryParams = { ...queryParams, querystring: term, pre_tags: '<b>', post_tags: '</b>', excerpt_size: 500, number_of_excerpts: 1 }
    }

    if (since) {
      queryParams = { ...queryParams, since: since };
    }

    if (until) {
      queryParams = { ...queryParams, until: until };
    }

    if (sort_by) {
      queryParams = { ...queryParams, sort_by: sort_by };
    }

    const pagination: Pagination = this.pagination(page || 1);
    queryParams = { ...queryParams, size: pagination.size, offset: pagination.offset };

    const encoded_qs = new URLSearchParams(queryParams).toString();
    const url = `https://queridodiario.ok.org.br/api/gazettes?${encoded_qs}`;

    return this.http.get<GazetteResponse>(url).pipe(
      map((res: GazetteResponse) => {
        return this.resolveGazettes(res);
      })
    );
  }
}
