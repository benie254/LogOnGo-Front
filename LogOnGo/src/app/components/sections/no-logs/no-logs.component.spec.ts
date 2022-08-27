import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLogsComponent } from './no-logs.component';

describe('NoLogsComponent', () => {
  let component: NoLogsComponent;
  let fixture: ComponentFixture<NoLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
