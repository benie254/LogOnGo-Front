import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetrolReceivedFormComponent } from './petrol-received-form.component';

describe('PetrolReceivedFormComponent', () => {
  let component: PetrolReceivedFormComponent;
  let fixture: ComponentFixture<PetrolReceivedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetrolReceivedFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetrolReceivedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
