import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailCreditCardComponent } from './email-credit-card.component';

describe('EmailCreditCardComponent', () => {
  let component: EmailCreditCardComponent;
  let fixture: ComponentFixture<EmailCreditCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailCreditCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailCreditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
