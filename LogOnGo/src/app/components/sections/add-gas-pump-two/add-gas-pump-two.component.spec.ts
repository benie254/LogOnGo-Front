import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGasPumpTwoComponent } from './add-gas-pump-two.component';

describe('AddGasPumpTwoComponent', () => {
  let component: AddGasPumpTwoComponent;
  let fixture: ComponentFixture<AddGasPumpTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGasPumpTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGasPumpTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
