import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitiesComponent } from './universities.component';

describe('UniversitiesComponent', () => {
  let component: UniversitiesComponent;
  let fixture: ComponentFixture<UniversitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
