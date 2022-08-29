import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PumpsUpdateFormComponent } from './pumps-update-form.component';

describe('PumpsUpdateFormComponent', () => {
  let component: PumpsUpdateFormComponent;
  let fixture: ComponentFixture<PumpsUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PumpsUpdateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PumpsUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
