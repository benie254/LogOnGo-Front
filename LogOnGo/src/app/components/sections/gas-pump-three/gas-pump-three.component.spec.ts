import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasPumpThreeComponent } from './gas-pump-three.component';

describe('GasPumpThreeComponent', () => {
  let component: GasPumpThreeComponent;
  let fixture: ComponentFixture<GasPumpThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GasPumpThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GasPumpThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
