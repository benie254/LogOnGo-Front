import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieselNoMpesaComponent } from './diesel-no-mpesa.component';

describe('DieselNoMpesaComponent', () => {
  let component: DieselNoMpesaComponent;
  let fixture: ComponentFixture<DieselNoMpesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DieselNoMpesaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DieselNoMpesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
