import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgramHistoryUniversitiesComponent } from './program-history.component';

describe('ProgramHistoryUniversitiesComponent', () => {
  let component: ProgramHistoryUniversitiesComponent;
  let fixture: ComponentFixture<ProgramHistoryUniversitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgramHistoryUniversitiesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgramHistoryUniversitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


