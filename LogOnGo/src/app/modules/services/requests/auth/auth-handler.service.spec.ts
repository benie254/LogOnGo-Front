import { TestBed } from '@angular/core/testing';

import { AuthHandlerService } from './auth-handler.service';

describe('AuthHandlerService', () => {
  let service: AuthHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
