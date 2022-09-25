import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasPumpOneComponent } from './gas-pump-one.component';

describe('GasPumpOneComponent', () => {
  let component: GasPumpOneComponent;
  let fixture: ComponentFixture<GasPumpOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GasPumpOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GasPumpOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
