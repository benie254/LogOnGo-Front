import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthBgComponent } from './auth-bg.component';

describe('AuthBgComponent', () => {
  let component: AuthBgComponent;
  let fixture: ComponentFixture<AuthBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthBgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
