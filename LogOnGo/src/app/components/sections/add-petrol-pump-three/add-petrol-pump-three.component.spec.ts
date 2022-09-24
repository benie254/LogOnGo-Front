import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPetrolPumpThreeComponent } from './add-petrol-pump-three.component';

describe('AddPetrolPumpThreeComponent', () => {
  let component: AddPetrolPumpThreeComponent;
  let fixture: ComponentFixture<AddPetrolPumpThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPetrolPumpThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPetrolPumpThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
