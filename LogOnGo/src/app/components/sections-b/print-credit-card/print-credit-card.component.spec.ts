import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintCreditCardComponent } from './print-credit-card.component';

describe('PrintCreditCardComponent', () => {
  let component: PrintCreditCardComponent;
  let fixture: ComponentFixture<PrintCreditCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintCreditCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintCreditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
