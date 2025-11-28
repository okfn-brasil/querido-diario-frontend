import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderUniversitiesComponent } from './header.component';

describe('HeaderUniversitiesComponent', () => {
  let component: HeaderUniversitiesComponent;
  let fixture: ComponentFixture<HeaderUniversitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderUniversitiesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderUniversitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

