import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelReceivedInfoComponent } from './fuel-received-info.component';

describe('FuelReceivedInfoComponent', () => {
  let component: FuelReceivedInfoComponent;
  let fixture: ComponentFixture<FuelReceivedInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelReceivedInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuelReceivedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
