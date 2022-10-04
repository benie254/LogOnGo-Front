import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieselSummaryComponent } from './diesel-summary.component';

describe('DieselSummaryComponent', () => {
  let component: DieselSummaryComponent;
  let fixture: ComponentFixture<DieselSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DieselSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DieselSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
