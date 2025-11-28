import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HowToJoinUniversitiesComponent } from './how-to-join.component';

describe('HowToJoinUniversitiesComponent', () => {
  let component: HowToJoinUniversitiesComponent;
  let fixture: ComponentFixture<HowToJoinUniversitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HowToJoinUniversitiesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HowToJoinUniversitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

