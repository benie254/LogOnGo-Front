import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelMpesaLogsComponent } from './fuel-mpesa-logs.component';

describe('FuelMpesaLogsComponent', () => {
  let component: FuelMpesaLogsComponent;
  let fixture: ComponentFixture<FuelMpesaLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelMpesaLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuelMpesaLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
