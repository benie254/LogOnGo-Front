import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetrolSummaryComponent } from './petrol-summary.component';

describe('PetrolSummaryComponent', () => {
  let component: PetrolSummaryComponent;
  let fixture: ComponentFixture<PetrolSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetrolSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetrolSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
