import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieselPumpOneComponent } from './diesel-pump-one.component';

describe('DieselPumpOneComponent', () => {
  let component: DieselPumpOneComponent;
  let fixture: ComponentFixture<DieselPumpOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DieselPumpOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DieselPumpOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
