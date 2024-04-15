import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeBaseUniversitiesComponent } from './knowledge-base.component';

describe('KnowledgeBaseUniversitiesComponent', () => {
  let component: KnowledgeBaseUniversitiesComponent;
  let fixture: ComponentFixture<KnowledgeBaseUniversitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowledgeBaseUniversitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeBaseUniversitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
