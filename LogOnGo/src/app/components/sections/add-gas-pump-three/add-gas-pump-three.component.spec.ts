import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGasPumpThreeComponent } from './add-gas-pump-three.component';

describe('AddGasPumpThreeComponent', () => {
  let component: AddGasPumpThreeComponent;
  let fixture: ComponentFixture<AddGasPumpThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGasPumpThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGasPumpThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
