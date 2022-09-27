import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMpesaLogpageComponent } from './add-mpesa-logpage.component';

describe('AddMpesaLogpageComponent', () => {
  let component: AddMpesaLogpageComponent;
  let fixture: ComponentFixture<AddMpesaLogpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMpesaLogpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMpesaLogpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
