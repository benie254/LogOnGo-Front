import { TestBed } from '@angular/core/testing';

import { MpesaHandlerService } from './mpesa-handler.service';

describe('MpesaHandlerService', () => {
  let service: MpesaHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MpesaHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
