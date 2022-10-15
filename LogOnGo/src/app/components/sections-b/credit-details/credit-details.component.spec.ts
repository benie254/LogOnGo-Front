import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditDetailsComponent } from './credit-details.component';

describe('CreditDetailsComponent', () => {
  let component: CreditDetailsComponent;
  let fixture: ComponentFixture<CreditDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
