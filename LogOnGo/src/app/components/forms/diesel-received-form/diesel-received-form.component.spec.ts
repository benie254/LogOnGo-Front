import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieselReceivedFormComponent } from './diesel-received-form.component';

describe('DieselReceivedFormComponent', () => {
  let component: DieselReceivedFormComponent;
  let fixture: ComponentFixture<DieselReceivedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DieselReceivedFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DieselReceivedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
