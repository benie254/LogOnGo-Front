import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMpesaComponent } from './search-mpesa.component';

describe('SearchMpesaComponent', () => {
  let component: SearchMpesaComponent;
  let fixture: ComponentFixture<SearchMpesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMpesaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchMpesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
