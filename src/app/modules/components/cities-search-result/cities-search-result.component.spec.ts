import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesSearchResultComponent } from './cities-search-result.component';

describe('CitiesSearchResultComponent', () => {
  let component: CitiesSearchResultComponent;
  let fixture: ComponentFixture<CitiesSearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitiesSearchResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
