import { TestBed } from '@angular/core/testing';

import { FuelHandlerService } from './fuel-handler.service';

describe('FuelHandlerService', () => {
  let service: FuelHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuelHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
