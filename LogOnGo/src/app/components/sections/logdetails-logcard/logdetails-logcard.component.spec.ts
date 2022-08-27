import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogdetailsLogcardComponent } from './logdetails-logcard.component';

describe('LogdetailsLogcardComponent', () => {
  let component: LogdetailsLogcardComponent;
  let fixture: ComponentFixture<LogdetailsLogcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogdetailsLogcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogdetailsLogcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
