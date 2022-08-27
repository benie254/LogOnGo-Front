import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMpesalogComponent } from './add-mpesalog.component';

describe('AddMpesalogComponent', () => {
  let component: AddMpesalogComponent;
  let fixture: ComponentFixture<AddMpesalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMpesalogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMpesalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
