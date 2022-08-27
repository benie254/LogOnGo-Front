import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetrolDetailsComponent } from './petrol-details.component';

describe('PetrolDetailsComponent', () => {
  let component: PetrolDetailsComponent;
  let fixture: ComponentFixture<PetrolDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetrolDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetrolDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
