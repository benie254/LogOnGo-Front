import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDieselCreditFormComponent } from './add-diesel-credit-form.component';

describe('AddDieselCreditFormComponent', () => {
  let component: AddDieselCreditFormComponent;
  let fixture: ComponentFixture<AddDieselCreditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDieselCreditFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDieselCreditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
