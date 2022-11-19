import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLogCardComponent } from './profile-log-card.component';

describe('ProfileLogCardComponent', () => {
  let component: ProfileLogCardComponent;
  let fixture: ComponentFixture<ProfileLogCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileLogCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileLogCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
