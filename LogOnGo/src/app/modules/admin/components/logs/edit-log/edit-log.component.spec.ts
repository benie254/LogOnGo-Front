import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLogComponent } from './edit-log.component';

describe('EditLogComponent', () => {
  let component: EditLogComponent;
  let fixture: ComponentFixture<EditLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
