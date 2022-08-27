import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricePerlitreComponent } from './price-perlitre.component';

describe('PricePerlitreComponent', () => {
  let component: PricePerlitreComponent;
  let fixture: ComponentFixture<PricePerlitreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricePerlitreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricePerlitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
