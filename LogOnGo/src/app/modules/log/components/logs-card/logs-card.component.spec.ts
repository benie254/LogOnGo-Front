import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsCardComponent } from './logs-card.component';

describe('LogsCardComponent', () => {
  let component: LogsCardComponent;
  let fixture: ComponentFixture<LogsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
