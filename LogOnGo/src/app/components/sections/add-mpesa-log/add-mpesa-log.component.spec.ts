import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMpesaLogComponent } from './add-mpesa-log.component';

describe('AddMpesaLogComponent', () => {
  let component: AddMpesaLogComponent;
  let fixture: ComponentFixture<AddMpesaLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMpesaLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMpesaLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
