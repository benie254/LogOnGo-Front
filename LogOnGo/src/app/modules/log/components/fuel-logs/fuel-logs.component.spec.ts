import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelLogsComponent } from './fuel-logs.component';

describe('FuelLogsComponent', () => {
  let component: FuelLogsComponent;
  let fixture: ComponentFixture<FuelLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuelLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
