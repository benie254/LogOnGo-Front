import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCardLogsComponent } from './profile-card-logs.component';

describe('ProfileCardLogsComponent', () => {
  let component: ProfileCardLogsComponent;
  let fixture: ComponentFixture<ProfileCardLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileCardLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileCardLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
