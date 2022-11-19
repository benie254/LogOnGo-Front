import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintCardComponent } from './print-card.component';

describe('PrintCardComponent', () => {
  let component: PrintCardComponent;
  let fixture: ComponentFixture<PrintCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
