import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCardPageComponent } from './add-card-page.component';

describe('AddCardPageComponent', () => {
  let component: AddCardPageComponent;
  let fixture: ComponentFixture<AddCardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCardPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
