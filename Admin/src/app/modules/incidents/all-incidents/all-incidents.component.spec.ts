import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllIncidentsComponent } from './all-incidents.component';

describe('AllIncidentsComponent', () => {
  let component: AllIncidentsComponent;
  let fixture: ComponentFixture<AllIncidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllIncidentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllIncidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
