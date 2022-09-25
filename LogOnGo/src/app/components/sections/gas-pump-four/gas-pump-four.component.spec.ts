import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasPumpFourComponent } from './gas-pump-four.component';

describe('GasPumpFourComponent', () => {
  let component: GasPumpFourComponent;
  let fixture: ComponentFixture<GasPumpFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GasPumpFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GasPumpFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
