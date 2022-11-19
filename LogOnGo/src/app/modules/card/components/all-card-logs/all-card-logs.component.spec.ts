import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCardLogsComponent } from './all-card-logs.component';

describe('AllCardLogsComponent', () => {
  let component: AllCardLogsComponent;
  let fixture: ComponentFixture<AllCardLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCardLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCardLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
