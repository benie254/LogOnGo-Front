import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceperlitreUpdateFormComponent } from './priceperlitre-update-form.component';

describe('PriceperlitreUpdateFormComponent', () => {
  let component: PriceperlitreUpdateFormComponent;
  let fixture: ComponentFixture<PriceperlitreUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceperlitreUpdateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceperlitreUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
