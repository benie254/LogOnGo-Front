import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileNompesalogsComponent } from './profile-nompesalogs.component';

describe('ProfileNompesalogsComponent', () => {
  let component: ProfileNompesalogsComponent;
  let fixture: ComponentFixture<ProfileNompesalogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileNompesalogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileNompesalogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
