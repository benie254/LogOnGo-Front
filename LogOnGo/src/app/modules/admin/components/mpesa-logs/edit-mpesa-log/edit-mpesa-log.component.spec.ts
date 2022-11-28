import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMpesaLogComponent } from './edit-mpesa-log.component';

describe('EditMpesaLogComponent', () => {
  let component: EditMpesaLogComponent;
  let fixture: ComponentFixture<EditMpesaLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMpesaLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMpesaLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
