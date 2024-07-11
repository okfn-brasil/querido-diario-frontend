import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataStateFilterComponent } from './data-state-filter.component';

describe('DataStateFilterComponent', () => {
  let component: DataStateFilterComponent;
  let fixture: ComponentFixture<DataStateFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataStateFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataStateFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
