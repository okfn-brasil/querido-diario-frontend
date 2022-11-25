import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCategoriesComponent } from './blog-categories.component';

describe('BlogCategoriesComponent', () => {
  let component: BlogCategoriesComponent;
  let fixture: ComponentFixture<BlogCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
