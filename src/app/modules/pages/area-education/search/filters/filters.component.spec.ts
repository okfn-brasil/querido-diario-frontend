import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationFiltersComponent } from './filters.component';

describe('FiltersComponent', () => {
  let component: EducationFiltersComponent;
  let fixture: ComponentFixture<EducationFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
