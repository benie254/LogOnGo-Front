import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCreditCardLogComponent } from './edit-credit-card-log.component';

describe('EditCreditCardLogComponent', () => {
  let component: EditCreditCardLogComponent;
  let fixture: ComponentFixture<EditCreditCardLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCreditCardLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCreditCardLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
