import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCreditCardFormComponent } from './add-credit-card-form.component';

describe('AddCreditCardFormComponent', () => {
  let component: AddCreditCardFormComponent;
  let fixture: ComponentFixture<AddCreditCardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCreditCardFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCreditCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
