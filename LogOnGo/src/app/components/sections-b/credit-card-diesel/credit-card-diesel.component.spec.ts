import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardDieselComponent } from './credit-card-diesel.component';

describe('CreditCardDieselComponent', () => {
  let component: CreditCardDieselComponent;
  let fixture: ComponentFixture<CreditCardDieselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardDieselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditCardDieselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
