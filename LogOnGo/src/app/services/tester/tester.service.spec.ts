import { TestBed } from '@angular/core/testing';

import { TesterService } from './tester.service';

describe('TesterService', () => {
  let service: TesterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TesterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
