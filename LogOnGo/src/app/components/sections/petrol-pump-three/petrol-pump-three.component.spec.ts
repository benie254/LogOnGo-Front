import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetrolPumpThreeComponent } from './petrol-pump-three.component';

describe('PetrolPumpThreeComponent', () => {
  let component: PetrolPumpThreeComponent;
  let fixture: ComponentFixture<PetrolPumpThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetrolPumpThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetrolPumpThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
