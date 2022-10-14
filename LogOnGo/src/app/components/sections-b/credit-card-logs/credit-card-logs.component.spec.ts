import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardLogsComponent } from './credit-card-logs.component';

describe('CreditCardLogsComponent', () => {
  let component: CreditCardLogsComponent;
  let fixture: ComponentFixture<CreditCardLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditCardLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
