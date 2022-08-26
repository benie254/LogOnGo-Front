import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialUpdateComponent } from './initial-update.component';

describe('InitialUpdateComponent', () => {
  let component: InitialUpdateComponent;
  let fixture: ComponentFixture<InitialUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitialUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
