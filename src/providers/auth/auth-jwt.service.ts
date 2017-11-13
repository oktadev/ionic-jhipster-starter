import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { Api } from '../api/api';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthServerProvider {

  constructor(private http: HttpClient,
              private $localStorage: LocalStorageService,
              private $sessionStorage: SessionStorageService) {
  }

  getToken() {
    return this.$localStorage.retrieve('authenticationToken') || this.$sessionStorage.retrieve('authenticationToken');
  }

  login(credentials): Observable<any> {

    const data = {
      username: credentials.username,
      password: credentials.password,
      rememberMe: credentials.rememberMe
    };

    return this.http.post(Api.API_URL + '/authenticate', data).map((response: any) => {
      const jwt = response['id_token'];
      if (jwt) {
        this.storeAuthenticationToken(jwt, credentials.rememberMe);
        return jwt;
      }
    });
  }

  loginWithToken(jwt, rememberMe) {
    if (jwt) {
      this.storeAuthenticationToken(jwt, rememberMe);
      return Promise.resolve(jwt);
    } else {
      return Promise.reject('auth-jwt-service Promise reject'); // Put appropriate error message here
    }
  }

  storeAuthenticationToken(jwt, rememberMe) {
    if (rememberMe) {
      this.$localStorage.store('authenticationToken', jwt);
    } else {
      this.$sessionStorage.store('authenticationToken', jwt);
    }
  }

  logout(): Observable<any> {
    return new Observable((observer) => {
      this.$localStorage.clear('authenticationToken');
      this.$sessionStorage.clear('authenticationToken');
      observer.complete();
    });
  }
}
