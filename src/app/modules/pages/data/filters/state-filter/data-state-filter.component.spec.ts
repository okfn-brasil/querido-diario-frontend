import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggregateStateFilterComponent } from './data-state-filter.component';

describe('AggregateStateFilterComponent', () => {
  let component: AggregateStateFilterComponent;
  let fixture: ComponentFixture<AggregateStateFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggregateStateFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggregateStateFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
