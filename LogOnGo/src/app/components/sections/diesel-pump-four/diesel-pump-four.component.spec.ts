import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieselPumpFourComponent } from './diesel-pump-four.component';

describe('DieselPumpFourComponent', () => {
  let component: DieselPumpFourComponent;
  let fixture: ComponentFixture<DieselPumpFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DieselPumpFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DieselPumpFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
