import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUniversitiesComponent } from './home.component';

describe('HomeUniversitiesComponent', () => {
  let component: HomeUniversitiesComponent;
  let fixture: ComponentFixture<HomeUniversitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeUniversitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeUniversitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
