import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardGasComponent } from './credit-card-gas.component';

describe('CreditCardGasComponent', () => {
  let component: CreditCardGasComponent;
  let fixture: ComponentFixture<CreditCardGasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardGasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditCardGasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
