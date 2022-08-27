import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintLogsComponent } from './print-logs.component';

describe('PrintLogsComponent', () => {
  let component: PrintLogsComponent;
  let fixture: ComponentFixture<PrintLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
