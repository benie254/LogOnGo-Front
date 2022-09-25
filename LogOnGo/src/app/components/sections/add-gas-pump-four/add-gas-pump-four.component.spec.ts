import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGasPumpFourComponent } from './add-gas-pump-four.component';

describe('AddGasPumpFourComponent', () => {
  let component: AddGasPumpFourComponent;
  let fixture: ComponentFixture<AddGasPumpFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGasPumpFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGasPumpFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
