import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoCreditDieselComponent } from './no-credit-diesel.component';

describe('NoCreditDieselComponent', () => {
  let component: NoCreditDieselComponent;
  let fixture: ComponentFixture<NoCreditDieselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoCreditDieselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoCreditDieselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
