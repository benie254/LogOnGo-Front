import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterProfileComponent } from './footer-profile.component';

describe('FooterProfileComponent', () => {
  let component: FooterProfileComponent;
  let fixture: ComponentFixture<FooterProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
