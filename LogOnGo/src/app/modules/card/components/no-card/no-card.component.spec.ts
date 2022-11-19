import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoCardComponent } from './no-card.component';

describe('NoCardComponent', () => {
  let component: NoCardComponent;
  let fixture: ComponentFixture<NoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
