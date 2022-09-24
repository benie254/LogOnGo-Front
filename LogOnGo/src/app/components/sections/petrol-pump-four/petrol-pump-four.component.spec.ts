import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetrolPumpFourComponent } from './petrol-pump-four.component';

describe('PetrolPumpFourComponent', () => {
  let component: PetrolPumpFourComponent;
  let fixture: ComponentFixture<PetrolPumpFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetrolPumpFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetrolPumpFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
