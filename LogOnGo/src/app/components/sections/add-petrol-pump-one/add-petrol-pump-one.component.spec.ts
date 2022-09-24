import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPetrolPumpOneComponent } from './add-petrol-pump-one.component';

describe('AddPetrolPumpOneComponent', () => {
  let component: AddPetrolPumpOneComponent;
  let fixture: ComponentFixture<AddPetrolPumpOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPetrolPumpOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPetrolPumpOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
