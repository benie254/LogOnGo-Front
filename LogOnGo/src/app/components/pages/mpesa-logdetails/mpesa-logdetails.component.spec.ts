import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpesaLogdetailsComponent } from './mpesa-logdetails.component';

describe('MpesaLogdetailsComponent', () => {
  let component: MpesaLogdetailsComponent;
  let fixture: ComponentFixture<MpesaLogdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpesaLogdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpesaLogdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
