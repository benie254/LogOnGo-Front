import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLogComponent } from './delete-log.component';

describe('DeleteLogComponent', () => {
  let component: DeleteLogComponent;
  let fixture: ComponentFixture<DeleteLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
