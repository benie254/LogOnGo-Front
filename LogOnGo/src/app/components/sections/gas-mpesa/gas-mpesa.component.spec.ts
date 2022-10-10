import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasMpesaComponent } from './gas-mpesa.component';

describe('GasMpesaComponent', () => {
  let component: GasMpesaComponent;
  let fixture: ComponentFixture<GasMpesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GasMpesaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GasMpesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
