import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTutorialComponent } from './search-tutorial.component';

describe('SearchTutorialComponent', () => {
  let component: SearchTutorialComponent;
  let fixture: ComponentFixture<SearchTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchTutorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
