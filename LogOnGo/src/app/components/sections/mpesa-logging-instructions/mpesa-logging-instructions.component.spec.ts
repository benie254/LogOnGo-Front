import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpesaLoggingInstructionsComponent } from './mpesa-logging-instructions.component';

describe('MpesaLoggingInstructionsComponent', () => {
  let component: MpesaLoggingInstructionsComponent;
  let fixture: ComponentFixture<MpesaLoggingInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpesaLoggingInstructionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpesaLoggingInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
