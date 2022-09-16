import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEducationComponent } from './header.component';

describe('HeaderEducationComponent', () => {
  let component: HeaderEducationComponent;
  let fixture: ComponentFixture<HeaderEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
