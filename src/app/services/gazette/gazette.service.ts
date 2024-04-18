import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Download, DownloadsLabels, Gazette, GazetteQuery, GazetteResponse, Pagination } from 'src/app/interfaces/gazette';

@Injectable({
  providedIn: 'root',
})
export class GazetteService {
  constructor(private http: HttpClient) {}

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      // Let the app keep running by returning a default result.
      return of(result as T);
    };
  }

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

    if (since) {
      queryParams = { ...queryParams, published_since: since };
    }

    if (until) {
      queryParams = { ...queryParams, published_until: until };
    }

    if (sort_by) {
      queryParams = { ...queryParams, sort_by };
    }

    const pagination: Pagination = this.pagination(page || 1);
    queryParams = { ...queryParams, size: pagination.size, offset: pagination.offset };

    const encodedQueryString = new URLSearchParams(queryParams).toString();
    const url = new URL(`/gazettes?${encodedQueryString}${territoryQuery}`, `http://localhost:8080`).toString();

    return this.http.get<GazetteResponse>(url).pipe(
      map((res: GazetteResponse) => {
        return this.resolveGazettes(res);
      }),
      catchError(this.handleError<GazetteResponse>({
        total_gazettes: -1,
        gazettes: [],
        error: true,
      })),
    );
  }
}
