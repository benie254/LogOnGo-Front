import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetrolPumpTwoComponent } from './petrol-pump-two.component';

describe('PetrolPumpTwoComponent', () => {
  let component: PetrolPumpTwoComponent;
  let fixture: ComponentFixture<PetrolPumpTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetrolPumpTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetrolPumpTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
