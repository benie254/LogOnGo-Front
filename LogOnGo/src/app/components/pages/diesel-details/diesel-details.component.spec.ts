import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieselDetailsComponent } from './diesel-details.component';

describe('DieselDetailsComponent', () => {
  let component: DieselDetailsComponent;
  let fixture: ComponentFixture<DieselDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DieselDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DieselDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
