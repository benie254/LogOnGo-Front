import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoCreditGasComponent } from './no-credit-gas.component';

describe('NoCreditGasComponent', () => {
  let component: NoCreditGasComponent;
  let fixture: ComponentFixture<NoCreditGasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoCreditGasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoCreditGasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
