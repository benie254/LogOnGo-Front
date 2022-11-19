import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileNoAnnouncementsComponent } from './profile-no-announcements.component';

describe('ProfileNoAnnouncementsComponent', () => {
  let component: ProfileNoAnnouncementsComponent;
  let fixture: ComponentFixture<ProfileNoAnnouncementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileNoAnnouncementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileNoAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
