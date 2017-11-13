import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Api } from '../api/api';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AccountService  {
    constructor(private http: HttpClient) { }

    get(): Observable<any> {
        return this.http.get(Api.API_URL + '/account');
    }

    save(account: any): Observable<Object> {
        return this.http.post(Api.API_URL + '/account', account);
    }
}
