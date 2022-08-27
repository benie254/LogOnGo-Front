import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDieselLogformComponent } from './add-diesel-logform.component';

describe('AddDieselLogformComponent', () => {
  let component: AddDieselLogformComponent;
  let fixture: ComponentFixture<AddDieselLogformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDieselLogformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDieselLogformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
