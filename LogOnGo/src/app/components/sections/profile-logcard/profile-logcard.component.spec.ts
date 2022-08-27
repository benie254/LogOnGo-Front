import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLogcardComponent } from './profile-logcard.component';

describe('ProfileLogcardComponent', () => {
  let component: ProfileLogcardComponent;
  let fixture: ComponentFixture<ProfileLogcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileLogcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileLogcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
