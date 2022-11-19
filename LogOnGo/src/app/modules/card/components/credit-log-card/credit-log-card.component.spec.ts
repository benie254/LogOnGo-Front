import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditLogCardComponent } from './credit-log-card.component';

describe('CreditLogCardComponent', () => {
  let component: CreditLogCardComponent;
  let fixture: ComponentFixture<CreditLogCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditLogCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditLogCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
