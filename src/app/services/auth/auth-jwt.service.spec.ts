import { TestBed } from '@angular/core/testing';
import { AuthServerProvider } from './auth-jwt.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Ng2Webstorage } from 'ngx-webstorage';

describe('AuthServerProvider', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, Ng2Webstorage.forRoot()]
  }));

  it('should be created', () => {
    const service: AuthServerProvider = TestBed.get(AuthServerProvider);
    expect(service).toBeTruthy();
  });
});
