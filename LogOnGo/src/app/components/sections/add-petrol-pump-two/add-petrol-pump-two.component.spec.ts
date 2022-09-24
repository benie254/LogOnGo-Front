import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPetrolPumpTwoComponent } from './add-petrol-pump-two.component';

describe('AddPetrolPumpTwoComponent', () => {
  let component: AddPetrolPumpTwoComponent;
  let fixture: ComponentFixture<AddPetrolPumpTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPetrolPumpTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPetrolPumpTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
