import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLogDetailsComponent } from './update-log-details.component';

describe('UpdateLogDetailsComponent', () => {
  let component: UpdateLogDetailsComponent;
  let fixture: ComponentFixture<UpdateLogDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLogDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
