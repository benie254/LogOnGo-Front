import { TestBed } from '@angular/core/testing';

import { MpesaService } from './mpesa.service';

describe('MpesaService', () => {
  let service: MpesaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MpesaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
