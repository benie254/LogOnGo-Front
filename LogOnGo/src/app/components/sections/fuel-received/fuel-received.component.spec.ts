import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelReceivedComponent } from './fuel-received.component';

describe('FuelReceivedComponent', () => {
  let component: FuelReceivedComponent;
  let fixture: ComponentFixture<FuelReceivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelReceivedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuelReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
