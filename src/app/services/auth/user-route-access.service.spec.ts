import { TestBed } from '@angular/core/testing';
import { UserRouteAccessService } from './user-route-access.service';

describe('UserRouteAccessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserRouteAccessService = TestBed.get(UserRouteAccessService);
    expect(service).toBeTruthy();
  });
});
