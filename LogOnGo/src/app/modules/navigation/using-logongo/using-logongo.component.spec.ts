import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingLogongoComponent } from './using-logongo.component';

describe('UsingLogongoComponent', () => {
  let component: UsingLogongoComponent;
  let fixture: ComponentFixture<UsingLogongoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingLogongoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsingLogongoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
