import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAnnouncementsComponent } from './profile-announcements.component';

describe('ProfileAnnouncementsComponent', () => {
  let component: ProfileAnnouncementsComponent;
  let fixture: ComponentFixture<ProfileAnnouncementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileAnnouncementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
