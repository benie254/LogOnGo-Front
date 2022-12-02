import { TestBed } from '@angular/core/testing';

import { MyErrorStateMatcher } from './matcher.service';

describe('MatcherService', () => {
  let service: MyErrorStateMatcher;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyErrorStateMatcher);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
