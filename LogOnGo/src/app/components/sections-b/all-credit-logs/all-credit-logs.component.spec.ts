import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCreditLogsComponent } from './all-credit-logs.component';

describe('AllCreditLogsComponent', () => {
  let component: AllCreditLogsComponent;
  let fixture: ComponentFixture<AllCreditLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCreditLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCreditLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
