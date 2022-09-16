import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogHeaderComponent } from './blog-header.component';

describe('BlogHeaderComponent', () => {
  let component: BlogHeaderComponent;
  let fixture: ComponentFixture<BlogHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
