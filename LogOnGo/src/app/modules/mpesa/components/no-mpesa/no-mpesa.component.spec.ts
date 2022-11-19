import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoMpesaComponent } from './no-mpesa.component';

describe('NoMpesaComponent', () => {
  let component: NoMpesaComponent;
  let fixture: ComponentFixture<NoMpesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoMpesaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoMpesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
