import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggingInstructionsComponent } from './logging-instructions.component';

describe('LoggingInstructionsComponent', () => {
  let component: LoggingInstructionsComponent;
  let fixture: ComponentFixture<LoggingInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggingInstructionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoggingInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
