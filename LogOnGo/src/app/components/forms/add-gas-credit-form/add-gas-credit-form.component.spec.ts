import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGasCreditFormComponent } from './add-gas-credit-form.component';

describe('AddGasCreditFormComponent', () => {
  let component: AddGasCreditFormComponent;
  let fixture: ComponentFixture<AddGasCreditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGasCreditFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGasCreditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
