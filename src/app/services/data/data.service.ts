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

  resolveDataSearchDownloads(data: DataSearch): DataSearch {
    const downloads: DownloadData[] = [];
    if (data.url_zip) {
      downloads.push({ value: data.url_zip, viewValue: DownloadsLabelsData.URL_ZIP})
    }

    return { ...data, downloads }
  }

  resolveDataSearch(res: ResponseDataSearch): ResponseDataSearch {
    const datas = res.datas.map((data: DataSearch) => this.resolveDataSearchDownloads(data))
    return { ...res, datas }
  }

  findAll(query: DataSearchQuery): Observable<ResponseDataSearch> {
    const { territory_id, state_code } = query;
    let queryParams: any = {};

    if (state_code && !territory_id) {
        queryParams = { state_code: state_code };
    } else {
        queryParams = { territory_id: territory_id, state_code: state_code };
    }

    let url: string;
    if (Object.keys(queryParams).length === 0) {
        url = new URL(`/aggregate/${state_code}`, 'http://0.0.0.0:8080').toString();
    } else {
        const encodedQueryString = new URLSearchParams(queryParams).toString();
        url = new URL(`/aggregate/${state_code}?${encodedQueryString}`, 'http://0.0.0.0:8080').toString();
    }

    return this.http.get<ResponseDataSearch>(url).pipe(
      map((res: ResponseDataSearch) => {
        return this.resolveDataSearch(res);
      }),
      catchError(this.handleError<ResponseDataSearch>({
        total_dataSearch: 0,
        datas: [],
        error: false,
      })),
    );
}

}
