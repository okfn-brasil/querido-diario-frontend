import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduPaginationComponent } from './pagination.component';

describe('EduPaginationComponent', () => {
  let component: EduPaginationComponent;
  let fixture: ComponentFixture<EduPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EduPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EduPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
