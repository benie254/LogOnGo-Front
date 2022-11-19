import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMpesaComponent } from './add-mpesa.component';

describe('AddMpesaComponent', () => {
  let component: AddMpesaComponent;
  let fixture: ComponentFixture<AddMpesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMpesaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMpesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
