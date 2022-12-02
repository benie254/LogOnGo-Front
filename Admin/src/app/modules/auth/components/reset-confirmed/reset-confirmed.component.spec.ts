import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetConfirmedComponent } from './reset-confirmed.component';

describe('ResetConfirmedComponent', () => {
  let component: ResetConfirmedComponent;
  let fixture: ComponentFixture<ResetConfirmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetConfirmedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetConfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
