import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetConfirmedFormComponent } from './reset-confirmed-form.component';

describe('ResetConfirmedFormComponent', () => {
  let component: ResetConfirmedFormComponent;
  let fixture: ComponentFixture<ResetConfirmedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetConfirmedFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetConfirmedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
