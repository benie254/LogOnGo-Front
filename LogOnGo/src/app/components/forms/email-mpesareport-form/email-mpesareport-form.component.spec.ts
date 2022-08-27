import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailMpesareportFormComponent } from './email-mpesareport-form.component';

describe('EmailMpesareportFormComponent', () => {
  let component: EmailMpesareportFormComponent;
  let fixture: ComponentFixture<EmailMpesareportFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailMpesareportFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailMpesareportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
