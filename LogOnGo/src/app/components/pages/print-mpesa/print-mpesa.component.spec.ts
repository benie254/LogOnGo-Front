import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintMpesaComponent } from './print-mpesa.component';

describe('PrintMpesaComponent', () => {
  let component: PrintMpesaComponent;
  let fixture: ComponentFixture<PrintMpesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintMpesaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintMpesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
