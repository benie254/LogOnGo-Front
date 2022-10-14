import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoCreditCardComponent } from './no-credit-card.component';

describe('NoCreditCardComponent', () => {
  let component: NoCreditCardComponent;
  let fixture: ComponentFixture<NoCreditCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoCreditCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoCreditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
