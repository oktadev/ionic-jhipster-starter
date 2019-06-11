import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { ApiService } from '../services/api/api.service';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request || !request.url || (/^http/.test(request.url) && !(ApiService.API_URL && request.url.startsWith(ApiService.API_URL)))) {
      return next.handle(request);
    }

    return from(this.handleAccess(request, next));
  }

  private async handleAccess(request: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>> {
    try {
      const token = await this.authService.getValidToken();
      request = request.clone({
        setHeaders: {
          Authorization: `${token.tokenType} ${token.accessToken}`
        }
      });
    } catch {
      // ignore
    }
    return next.handle(request).toPromise();
  }
}
