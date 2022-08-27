import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpesaLogsComponent } from './mpesa-logs.component';

describe('MpesaLogsComponent', () => {
  let component: MpesaLogsComponent;
  let fixture: ComponentFixture<MpesaLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpesaLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpesaLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
