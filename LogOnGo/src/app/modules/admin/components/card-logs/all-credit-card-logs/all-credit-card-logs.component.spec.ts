import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCreditCardLogsComponent } from './all-credit-card-logs.component';

describe('AllCreditCardLogsComponent', () => {
  let component: AllCreditCardLogsComponent;
  let fixture: ComponentFixture<AllCreditCardLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCreditCardLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCreditCardLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
