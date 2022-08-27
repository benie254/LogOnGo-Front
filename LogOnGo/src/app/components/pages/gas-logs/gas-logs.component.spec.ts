import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasLogsComponent } from './gas-logs.component';

describe('GasLogsComponent', () => {
  let component: GasLogsComponent;
  let fixture: ComponentFixture<GasLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GasLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GasLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
