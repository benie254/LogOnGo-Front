import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInstructionsComponent } from './card-instructions.component';

describe('CardInstructionsComponent', () => {
  let component: CardInstructionsComponent;
  let fixture: ComponentFixture<CardInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardInstructionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
