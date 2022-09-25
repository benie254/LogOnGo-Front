import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieselPumpTwoComponent } from './diesel-pump-two.component';

describe('DieselPumpTwoComponent', () => {
  let component: DieselPumpTwoComponent;
  let fixture: ComponentFixture<DieselPumpTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DieselPumpTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DieselPumpTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
