import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEducationComponent } from './search.component';

describe('SearchEducationComponent', () => {
  let component: SearchEducationComponent;
  let fixture: ComponentFixture<SearchEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
