import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelSummaryComponent } from './fuel-summary.component';

describe('FuelSummaryComponent', () => {
  let component: FuelSummaryComponent;
  let fixture: ComponentFixture<FuelSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuelSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
