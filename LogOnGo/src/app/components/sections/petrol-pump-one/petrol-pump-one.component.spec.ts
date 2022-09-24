import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetrolPumpOneComponent } from './petrol-pump-one.component';

describe('PetrolPumpOneComponent', () => {
  let component: PetrolPumpOneComponent;
  let fixture: ComponentFixture<PetrolPumpOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetrolPumpOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetrolPumpOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
