import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieselLogsComponent } from './diesel-logs.component';

describe('DieselLogsComponent', () => {
  let component: DieselLogsComponent;
  let fixture: ComponentFixture<DieselLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DieselLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DieselLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
