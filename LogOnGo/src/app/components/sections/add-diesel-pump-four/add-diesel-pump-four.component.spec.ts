import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDieselPumpFourComponent } from './add-diesel-pump-four.component';

describe('AddDieselPumpFourComponent', () => {
  let component: AddDieselPumpFourComponent;
  let fixture: ComponentFixture<AddDieselPumpFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDieselPumpFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDieselPumpFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
