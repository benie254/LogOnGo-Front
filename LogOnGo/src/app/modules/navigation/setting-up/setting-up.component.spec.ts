import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingUpComponent } from './setting-up.component';

describe('SettingUpComponent', () => {
  let component: SettingUpComponent;
  let fixture: ComponentFixture<SettingUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
