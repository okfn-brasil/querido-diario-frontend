import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAnalysisFormComponent } from './request-analysis-form.component';

describe('RequestAnalysisFormComponent', () => {
  let component: RequestAnalysisFormComponent;
  let fixture: ComponentFixture<RequestAnalysisFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestAnalysisFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestAnalysisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
