import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMpesaComponent } from './delete-mpesa.component';

describe('DeleteMpesaComponent', () => {
  let component: DeleteMpesaComponent;
  let fixture: ComponentFixture<DeleteMpesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteMpesaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteMpesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
