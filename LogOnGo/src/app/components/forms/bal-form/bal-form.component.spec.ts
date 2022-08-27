import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalFormComponent } from './bal-form.component';

describe('BalFormComponent', () => {
  let component: BalFormComponent;
  let fixture: ComponentFixture<BalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
