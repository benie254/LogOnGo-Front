import { TestBed } from '@angular/core/testing';

import { LogMpesaService } from './log-mpesa.service';

describe('LogMpesaService', () => {
  let service: LogMpesaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogMpesaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
