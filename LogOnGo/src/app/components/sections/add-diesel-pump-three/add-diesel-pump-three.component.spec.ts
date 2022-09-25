import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDieselPumpThreeComponent } from './add-diesel-pump-three.component';

describe('AddDieselPumpThreeComponent', () => {
  let component: AddDieselPumpThreeComponent;
  let fixture: ComponentFixture<AddDieselPumpThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDieselPumpThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDieselPumpThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
