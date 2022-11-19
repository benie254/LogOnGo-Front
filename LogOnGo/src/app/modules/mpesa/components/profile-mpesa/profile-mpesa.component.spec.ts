import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMpesaComponent } from './profile-mpesa.component';

describe('ProfileMpesaComponent', () => {
  let component: ProfileMpesaComponent;
  let fixture: ComponentFixture<ProfileMpesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileMpesaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileMpesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
