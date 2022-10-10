import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasNoMpesaComponent } from './gas-no-mpesa.component';

describe('GasNoMpesaComponent', () => {
  let component: GasNoMpesaComponent;
  let fixture: ComponentFixture<GasNoMpesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GasNoMpesaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GasNoMpesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
