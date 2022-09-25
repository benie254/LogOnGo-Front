import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasPumpTwoComponent } from './gas-pump-two.component';

describe('GasPumpTwoComponent', () => {
  let component: GasPumpTwoComponent;
  let fixture: ComponentFixture<GasPumpTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GasPumpTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GasPumpTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
