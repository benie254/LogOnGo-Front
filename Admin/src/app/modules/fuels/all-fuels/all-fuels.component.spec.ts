import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFuelsComponent } from './all-fuels.component';

describe('AllFuelsComponent', () => {
  let component: AllFuelsComponent;
  let fixture: ComponentFixture<AllFuelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFuelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllFuelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
