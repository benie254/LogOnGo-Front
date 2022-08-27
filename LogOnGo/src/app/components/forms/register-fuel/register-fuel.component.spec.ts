import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFuelComponent } from './register-fuel.component';

describe('RegisterFuelComponent', () => {
  let component: RegisterFuelComponent;
  let fixture: ComponentFixture<RegisterFuelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFuelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
