import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBalComponent } from './new-bal.component';

describe('NewBalComponent', () => {
  let component: NewBalComponent;
  let fixture: ComponentFixture<NewBalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewBalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
