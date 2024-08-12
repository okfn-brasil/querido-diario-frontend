import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggregateSearchComponent } from './aggregate-search.component';

describe('AggregateSearchComponent', () => {
  let component: AggregateSearchComponent;
  let fixture: ComponentFixture<AggregateSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggregateSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggregateSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
