import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasSummaryComponent } from './gas-summary.component';

describe('GasSummaryComponent', () => {
  let component: GasSummaryComponent;
  let fixture: ComponentFixture<GasSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GasSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GasSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
