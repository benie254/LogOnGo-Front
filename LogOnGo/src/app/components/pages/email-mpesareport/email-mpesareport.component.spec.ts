import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailMpesareportComponent } from './email-mpesareport.component';

describe('EmailMpesareportComponent', () => {
  let component: EmailMpesareportComponent;
  let fixture: ComponentFixture<EmailMpesareportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailMpesareportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailMpesareportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
