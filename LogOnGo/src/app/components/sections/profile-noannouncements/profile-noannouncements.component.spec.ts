import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileNoannouncementsComponent } from './profile-noannouncements.component';

describe('ProfileNoannouncementsComponent', () => {
  let component: ProfileNoannouncementsComponent;
  let fixture: ComponentFixture<ProfileNoannouncementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileNoannouncementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileNoannouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
