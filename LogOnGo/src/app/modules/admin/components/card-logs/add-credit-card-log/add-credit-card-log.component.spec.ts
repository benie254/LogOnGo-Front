import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCreditCardLogComponent } from './add-credit-card-log.component';

describe('AddCreditCardLogComponent', () => {
  let component: AddCreditCardLogComponent;
  let fixture: ComponentFixture<AddCreditCardLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCreditCardLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCreditCardLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
