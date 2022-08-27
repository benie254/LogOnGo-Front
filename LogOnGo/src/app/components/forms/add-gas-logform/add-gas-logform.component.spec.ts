import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGasLogformComponent } from './add-gas-logform.component';

describe('AddGasLogformComponent', () => {
  let component: AddGasLogformComponent;
  let fixture: ComponentFixture<AddGasLogformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGasLogformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGasLogformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
