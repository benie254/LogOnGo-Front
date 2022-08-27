import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentReportingInstructionsComponent } from './incident-reporting-instructions.component';

describe('IncidentReportingInstructionsComponent', () => {
  let component: IncidentReportingInstructionsComponent;
  let fixture: ComponentFixture<IncidentReportingInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentReportingInstructionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidentReportingInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
