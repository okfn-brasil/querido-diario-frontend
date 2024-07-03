import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { DataSearch, ResponseDataSearch, DataSearchQuery,DownloadData, DownloadsLabelsData } from 'src/app/interfaces/data-search';

@Injectable({
  providedIn: 'root',
})
export class DataSearchService {
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

  resolveGazetteDownloadsData(data: DataSearch): DataSearch {
    const downloads: DownloadData[] = [];
    if (data.url_zip) {
      downloads.push({ value: data.url_zip, viewValue: DownloadsLabelsData.URL_ZIP})
    }

    return { ...data, downloads }
  }

  resolveGazettes(res: ResponseDataSearch): ResponseDataSearch {
    const datas = res.datas.map((data: DataSearch) => this.resolveGazetteDownloadsData(data))
    return { ...res, datas }
  }

  findAll(query: DataSearchQuery): Observable<ResponseDataSearch> {
    const { territory_id, year } = query;
    let queryParams = {};
    let territoryQuery = '';

    if (territory_id && !Array.isArray(territory_id)) {
      queryParams = { ...queryParams, territory_ids: territory_id };
    } else if(territory_id && territory_id.length){
      (territory_id as string[]).forEach(id => {
        territoryQuery += '&territory_ids=' + id;
      });
    }

    if (year) {
      queryParams = { ...queryParams, published_since: year };
    }

    //const encodedQueryString = new URLSearchParams(queryParams).toString();
    const url = new URL(`/api/agregates?${territoryQuery}$`,
    `https://queridodiario.ok.org.br`).toString();

    return this.http.get<ResponseDataSearch>(url).pipe(
      map((res: ResponseDataSearch) => {
        return this.resolveGazettes(res);
      }),
      catchError(this.handleError<ResponseDataSearch>({
        total_dataSearch: -1,
        datas: [],
        error: true,
      })),
    );
  }
}
