import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Download, DownloadsLabels, Gazette, GazetteQuery, GazetteResponse, Pagination } from 'src/app/interfaces/gazette';

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
    const { term, territory_id, published_since, published_until, sort_by, page } = query;
    let queryParams = {};
    let territoryQuery = '';

    if (territory_id && !Array.isArray(territory_id)) {
      queryParams = { ...queryParams, territory_ids: territory_id };
    } else if(territory_id && territory_id.length){
      (territory_id as string[]).forEach(id => {
        territoryQuery += '&territory_ids=' + id;
      });
    }

    if (term) {
      queryParams = { ...queryParams, querystring: term, pre_tags: '<b>', post_tags: '</b>', excerpt_size: 500, number_of_excerpts: 1 }
    }

    if (published_since) {
      queryParams = { ...queryParams, published_since };
    }

    if (published_until) {
      queryParams = { ...queryParams, published_until };
    }

    if (sort_by) {
      queryParams = { ...queryParams, sort_by };
    }

    const pagination: Pagination = this.pagination(page || 1);
    queryParams = { ...queryParams, size: pagination.size, offset: pagination.offset };

    const encodedQueryString = new URLSearchParams(queryParams).toString();
    const url = new URL(`/api/gazettes?${encodedQueryString}${territoryQuery}`, `https://queridodiario.ok.org.br`).toString();

    return this.http.get<GazetteResponse>(url).pipe(
      map((res: GazetteResponse) => {
        return this.resolveGazettes(res);
      })
    );
  }
}
