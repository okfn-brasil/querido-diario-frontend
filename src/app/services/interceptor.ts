import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpClient
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, switchMap, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import { tokenKeys } from '../modules/pages/area-education/utils';

interface RefreshResponse {
  access: string;
}

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {}

  refreshToken(token: string) {
    return this.http.post('https://staging.diariodoclima.jurema.la/api/token/refresh/', {
      refresh: token
    });
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = this.addAuthHeader(request);

    return next.handle(request).pipe(catchError(error => {
      return this.handleResponseError(error, request, next);
    }));
  }

  addAuthHeader(request: HttpRequest<any>) {
    const token = localStorage.getItem(tokenKeys.token);
    if (token && location.href.includes('educacao')) {
      return request.clone({
        setHeaders: {
          'Authorization': 'Bearer ' + token
        }
      });
    }
    return request;
  }

  handleResponseError(err: HttpErrorResponse, request?: HttpRequest<any>, next?: HttpHandler): Observable<any> {
    const refreshToken = localStorage.getItem(tokenKeys.refresh);
    if (err.status === 401 && next && request && location.href.includes('educacao') && refreshToken && !request.url.includes('refresh')) {
      return this.refreshToken(refreshToken as string).pipe(
        switchMap(response => {
          localStorage.setItem(tokenKeys.token, (response as RefreshResponse).access);
          request = this.addAuthHeader(request as HttpRequest<any>);
          return next.handle(request);
        }),
        catchError(e => {
          if (e.status !== 401) {
            return this.handleResponseError(e);
          } else {
            this.redirectLogin();
            return e;
          }
      }));
    }

    return throwError(err);
  }

  redirectLogin() {
    localStorage.removeItem(tokenKeys.refresh);
    localStorage.removeItem(tokenKeys.token);
    this.router.navigate(['/educacao'], {queryParams: {login: 'open'}})
  }
}