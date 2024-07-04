import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCityFilterComponent } from './data-city-filter.component';

describe('CityFilterComponent', () => {
  let component: DataCityFilterComponent;
  let fixture: ComponentFixture<DataCityFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataCityFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCityFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
