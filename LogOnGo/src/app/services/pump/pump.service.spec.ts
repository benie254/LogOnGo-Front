import { TestBed } from '@angular/core/testing';

import { PumpService } from './pump.service';

describe('PumpService', () => {
  let service: PumpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PumpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
