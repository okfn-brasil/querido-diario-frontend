import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodPickerComponent } from './period-picker.component';

describe('PeriodPickerComponent', () => {
  let component: PeriodPickerComponent;
  let fixture: ComponentFixture<PeriodPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
