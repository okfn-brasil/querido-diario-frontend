import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggregateCityFilterComponent } from './data-city-filter.component';

describe('AggregateCityFilterComponent', () => {
  let component: AggregateCityFilterComponent;
  let fixture: ComponentFixture<AggregateCityFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggregateCityFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggregateCityFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
