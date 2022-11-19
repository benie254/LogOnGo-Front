import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMpesaLogsComponent } from './all-mpesa-logs.component';

describe('AllMpesaLogsComponent', () => {
  let component: AllMpesaLogsComponent;
  let fixture: ComponentFixture<AllMpesaLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMpesaLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllMpesaLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
