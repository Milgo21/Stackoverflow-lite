import { TestBed } from '@angular/core/testing';

import { AuthenticaionService } from './authenticaion.service';

describe('AuthenticaionService', () => {
  let service: AuthenticaionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticaionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
