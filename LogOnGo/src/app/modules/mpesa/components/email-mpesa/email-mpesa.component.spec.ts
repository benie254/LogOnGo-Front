import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailMpesaComponent } from './email-mpesa.component';

describe('EmailMpesaComponent', () => {
  let component: EmailMpesaComponent;
  let fixture: ComponentFixture<EmailMpesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailMpesaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailMpesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
