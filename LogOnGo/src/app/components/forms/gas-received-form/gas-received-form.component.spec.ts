import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasReceivedFormComponent } from './gas-received-form.component';

describe('GasReceivedFormComponent', () => {
  let component: GasReceivedFormComponent;
  let fixture: ComponentFixture<GasReceivedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GasReceivedFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GasReceivedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
