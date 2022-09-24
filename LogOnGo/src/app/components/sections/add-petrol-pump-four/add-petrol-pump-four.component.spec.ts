import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPetrolPumpFourComponent } from './add-petrol-pump-four.component';

describe('AddPetrolPumpFourComponent', () => {
  let component: AddPetrolPumpFourComponent;
  let fixture: ComponentFixture<AddPetrolPumpFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPetrolPumpFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPetrolPumpFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
