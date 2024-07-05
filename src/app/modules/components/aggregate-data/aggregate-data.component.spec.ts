import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggregateDataComponent } from './aggregate-data.component';

describe('AggregateDataComponent', () => {
  let component: AggregateDataComponent;
  let fixture: ComponentFixture<AggregateDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggregateDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggregateDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
