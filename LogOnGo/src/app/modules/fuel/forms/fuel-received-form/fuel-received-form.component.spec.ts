import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelReceivedFormComponent } from './fuel-received-form.component';

describe('FuelReceivedFormComponent', () => {
  let component: FuelReceivedFormComponent;
  let fixture: ComponentFixture<FuelReceivedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelReceivedFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuelReceivedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
