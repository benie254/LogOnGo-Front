import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDieselPumpTwoComponent } from './add-diesel-pump-two.component';

describe('AddDieselPumpTwoComponent', () => {
  let component: AddDieselPumpTwoComponent;
  let fixture: ComponentFixture<AddDieselPumpTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDieselPumpTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDieselPumpTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
