import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentInstructionsComponent } from './incident-instructions.component';

describe('IncidentInstructionsComponent', () => {
  let component: IncidentInstructionsComponent;
  let fixture: ComponentFixture<IncidentInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentInstructionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidentInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
