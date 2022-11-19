import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLogPageComponent } from './add-log-page.component';

describe('AddLogPageComponent', () => {
  let component: AddLogPageComponent;
  let fixture: ComponentFixture<AddLogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLogPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
