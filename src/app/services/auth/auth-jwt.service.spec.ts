import { TestBed } from '@angular/core/testing';
import { AuthServerProvider } from './auth-jwt.service';

describe('AuthServerProvider', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthServerProvider = TestBed.get(AuthServerProvider);
    expect(service).toBeTruthy();
  });
});
