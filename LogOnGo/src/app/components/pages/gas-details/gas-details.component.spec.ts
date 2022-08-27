import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasDetailsComponent } from './gas-details.component';

describe('GasDetailsComponent', () => {
  let component: GasDetailsComponent;
  let fixture: ComponentFixture<GasDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GasDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GasDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
