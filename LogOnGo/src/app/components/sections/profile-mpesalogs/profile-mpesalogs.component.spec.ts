import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMpesalogsComponent } from './profile-mpesalogs.component';

describe('ProfileMpesalogsComponent', () => {
  let component: ProfileMpesalogsComponent;
  let fixture: ComponentFixture<ProfileMpesalogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileMpesalogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileMpesalogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
