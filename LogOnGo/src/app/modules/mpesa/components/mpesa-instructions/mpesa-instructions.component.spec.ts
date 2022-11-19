import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpesaInstructionsComponent } from './mpesa-instructions.component';

describe('MpesaInstructionsComponent', () => {
  let component: MpesaInstructionsComponent;
  let fixture: ComponentFixture<MpesaInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpesaInstructionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpesaInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
