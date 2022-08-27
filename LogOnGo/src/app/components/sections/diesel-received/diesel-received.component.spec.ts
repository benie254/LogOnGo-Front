import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieselReceivedComponent } from './diesel-received.component';

describe('DieselReceivedComponent', () => {
  let component: DieselReceivedComponent;
  let fixture: ComponentFixture<DieselReceivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DieselReceivedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DieselReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
