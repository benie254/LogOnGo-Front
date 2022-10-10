import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieselMpesaComponent } from './diesel-mpesa.component';

describe('DieselMpesaComponent', () => {
  let component: DieselMpesaComponent;
  let fixture: ComponentFixture<DieselMpesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DieselMpesaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DieselMpesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
