import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetrolLogsComponent } from './petrol-logs.component';

describe('PetrolLogsComponent', () => {
  let component: PetrolLogsComponent;
  let fixture: ComponentFixture<PetrolLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetrolLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetrolLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
