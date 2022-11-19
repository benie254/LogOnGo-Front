import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpesaDetailsComponent } from './mpesa-details.component';

describe('MpesaDetailsComponent', () => {
  let component: MpesaDetailsComponent;
  let fixture: ComponentFixture<MpesaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpesaDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpesaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
