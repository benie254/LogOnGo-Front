import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelCardLogsComponent } from './fuel-card-logs.component';

describe('FuelCardLogsComponent', () => {
  let component: FuelCardLogsComponent;
  let fixture: ComponentFixture<FuelCardLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelCardLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuelCardLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
