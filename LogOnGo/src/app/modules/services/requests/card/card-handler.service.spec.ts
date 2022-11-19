import { TestBed } from '@angular/core/testing';

import { CardHandlerService } from './card-handler.service';

describe('CardHandlerService', () => {
  let service: CardHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
