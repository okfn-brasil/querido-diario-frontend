import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartSearchComponent } from './start-search.component';

describe('StartSearchComponent', () => {
  let component: StartSearchComponent;
  let fixture: ComponentFixture<StartSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
