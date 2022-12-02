import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFuelReceivedComponent } from './add-fuel-received.component';

describe('AddFuelReceivedComponent', () => {
  let component: AddFuelReceivedComponent;
  let fixture: ComponentFixture<AddFuelReceivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFuelReceivedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFuelReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
