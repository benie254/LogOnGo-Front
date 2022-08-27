import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoMpesalogsComponent } from './no-mpesalogs.component';

describe('NoMpesalogsComponent', () => {
  let component: NoMpesalogsComponent;
  let fixture: ComponentFixture<NoMpesalogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoMpesalogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoMpesalogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
