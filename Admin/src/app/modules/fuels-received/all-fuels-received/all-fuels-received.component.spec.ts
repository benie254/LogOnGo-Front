import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFuelsReceivedComponent } from './all-fuels-received.component';

describe('AllFuelsReceivedComponent', () => {
  let component: AllFuelsReceivedComponent;
  let fixture: ComponentFixture<AllFuelsReceivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFuelsReceivedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllFuelsReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
