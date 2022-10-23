import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCreditLogsComponent } from './profile-credit-logs.component';

describe('ProfileCreditLogsComponent', () => {
  let component: ProfileCreditLogsComponent;
  let fixture: ComponentFixture<ProfileCreditLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileCreditLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileCreditLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
