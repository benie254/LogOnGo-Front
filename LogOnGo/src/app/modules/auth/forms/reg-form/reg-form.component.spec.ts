import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegFormComponent } from './reg-form.component';

describe('RegFormComponent', () => {
  let component: RegFormComponent;
  let fixture: ComponentFixture<RegFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
