import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMpesaCardComponent } from './all-mpesa-card.component';

describe('AllMpesaCardComponent', () => {
  let component: AllMpesaCardComponent;
  let fixture: ComponentFixture<AllMpesaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMpesaCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllMpesaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
