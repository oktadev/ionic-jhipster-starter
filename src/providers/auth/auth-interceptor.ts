import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private localStorage: LocalStorageService, private sessionStorage: SessionStorageService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.localStorage.retrieve('authenticationToken') || this.sessionStorage.retrieve('authenticationToken');
    if (!!token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request).do((event: any) => {
      if (event instanceof HttpResponse) {
        return event;
      }
    });
  }
}
