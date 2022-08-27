import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLogpageComponent } from './add-logpage.component';

describe('AddLogpageComponent', () => {
  let component: AddLogpageComponent;
  let fixture: ComponentFixture<AddLogpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLogpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLogpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
