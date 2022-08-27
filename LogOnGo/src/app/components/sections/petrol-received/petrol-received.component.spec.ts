import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetrolReceivedComponent } from './petrol-received.component';

describe('PetrolReceivedComponent', () => {
  let component: PetrolReceivedComponent;
  let fixture: ComponentFixture<PetrolReceivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetrolReceivedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetrolReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
