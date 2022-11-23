import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCardFormComponent } from './delete-card-form.component';

describe('DeleteCardFormComponent', () => {
  let component: DeleteCardFormComponent;
  let fixture: ComponentFixture<DeleteCardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCardFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
