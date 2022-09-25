import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDieselPumpOneComponent } from './add-diesel-pump-one.component';

describe('AddDieselPumpOneComponent', () => {
  let component: AddDieselPumpOneComponent;
  let fixture: ComponentFixture<AddDieselPumpOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDieselPumpOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDieselPumpOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
