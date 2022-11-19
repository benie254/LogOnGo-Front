import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpesaLogCardComponent } from './mpesa-log-card.component';

describe('MpesaLogCardComponent', () => {
  let component: MpesaLogCardComponent;
  let fixture: ComponentFixture<MpesaLogCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpesaLogCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpesaLogCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
