import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggregateService } from './aggregate.service';

describe('AggregateService', () => {
  let component: AggregateService;
  let fixture: ComponentFixture<AggregateService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggregateService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggregateService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
