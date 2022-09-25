import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGasPumpOneComponent } from './add-gas-pump-one.component';

describe('AddGasPumpOneComponent', () => {
  let component: AddGasPumpOneComponent;
  let fixture: ComponentFixture<AddGasPumpOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGasPumpOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGasPumpOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
