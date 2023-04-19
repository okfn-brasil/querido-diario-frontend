import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogRelatedsComponent } from './blog-relateds.component';

describe('BlogRelatedsComponent', () => {
  let component: BlogRelatedsComponent;
  let fixture: ComponentFixture<BlogRelatedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogRelatedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogRelatedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
