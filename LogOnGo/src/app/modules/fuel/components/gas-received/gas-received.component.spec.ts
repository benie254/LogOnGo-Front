import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasReceivedComponent } from './gas-received.component';

describe('GasReceivedComponent', () => {
  let component: GasReceivedComponent;
  let fixture: ComponentFixture<GasReceivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GasReceivedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GasReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
