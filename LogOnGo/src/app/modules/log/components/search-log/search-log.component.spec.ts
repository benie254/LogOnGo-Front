import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLogComponent } from './search-log.component';

describe('SearchLogComponent', () => {
  let component: SearchLogComponent;
  let fixture: ComponentFixture<SearchLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
