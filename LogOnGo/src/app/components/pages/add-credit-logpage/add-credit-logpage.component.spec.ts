import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCreditLogpageComponent } from './add-credit-logpage.component';

describe('AddCreditLogpageComponent', () => {
  let component: AddCreditLogpageComponent;
  let fixture: ComponentFixture<AddCreditLogpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCreditLogpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCreditLogpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
