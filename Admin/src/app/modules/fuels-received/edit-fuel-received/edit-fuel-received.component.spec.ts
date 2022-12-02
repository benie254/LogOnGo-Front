import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFuelReceivedComponent } from './edit-fuel-received.component';

describe('EditFuelReceivedComponent', () => {
  let component: EditFuelReceivedComponent;
  let fixture: ComponentFixture<EditFuelReceivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFuelReceivedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFuelReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
