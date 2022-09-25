import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieselPumpThreeComponent } from './diesel-pump-three.component';

describe('DieselPumpThreeComponent', () => {
  let component: DieselPumpThreeComponent;
  let fixture: ComponentFixture<DieselPumpThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DieselPumpThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DieselPumpThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
