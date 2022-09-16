import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemesFilterComponent } from './themes-filter.component';

describe('ThemesFilterComponent', () => {
  let component: ThemesFilterComponent;
  let fixture: ComponentFixture<ThemesFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemesFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
