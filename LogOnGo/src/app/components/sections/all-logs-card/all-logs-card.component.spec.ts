import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLogsCardComponent } from './all-logs-card.component';

describe('AllLogsCardComponent', () => {
  let component: AllLogsCardComponent;
  let fixture: ComponentFixture<AllLogsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLogsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllLogsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
