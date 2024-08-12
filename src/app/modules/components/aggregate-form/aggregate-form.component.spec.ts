import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggregateFormComponent } from './aggregate-form.component';

describe('AggregateFormComponent', () => {
  let component: AggregateFormComponent;
  let fixture: ComponentFixture<AggregateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggregateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggregateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
