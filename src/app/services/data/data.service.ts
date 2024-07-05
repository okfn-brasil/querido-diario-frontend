import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { DataSearchQuery, ResponseDataSearch } from 'src/app/interfaces/data-search';

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

  findAll(query: DataSearchQuery): Observable<ResponseDataSearch> {
    const { territory_id, state_code } = query;
    let queryParams: any = {};

    let url: string;

    if (state_code && !territory_id) {
      queryParams = { state_code: state_code };
      url = new URL(
        `/aggregate/${state_code}`,
        'http://0.0.0.0:8080'
      ).toString();
    } else {
      queryParams = { territory_id: territory_id };
      const encodedQueryString = new URLSearchParams(queryParams).toString();
      url = new URL(
        `/aggregate/${state_code}?${encodedQueryString}`,
        'http://0.0.0.0:8080'
      ).toString();
    }

    return this.http.get<ResponseDataSearch>(url).pipe(
      map((res: ResponseDataSearch) => {
        return res;
      }),
      catchError(
        this.handleError<ResponseDataSearch>({
          state_code: '',
          territory_id: '',
          aggregates: [],
        })
      )
    );
  }
}
