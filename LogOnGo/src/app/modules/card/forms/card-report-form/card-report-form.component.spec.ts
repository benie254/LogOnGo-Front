import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReportFormComponent } from './card-report-form.component';

describe('CardReportFormComponent', () => {
  let component: CardReportFormComponent;
  let fixture: ComponentFixture<CardReportFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardReportFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
