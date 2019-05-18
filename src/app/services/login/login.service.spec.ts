import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';
import { Ng2Webstorage } from 'ngx-webstorage';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';

describe('LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, Ng2Webstorage.forRoot(), TranslateModule.forRoot()]
  }));

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });
});
