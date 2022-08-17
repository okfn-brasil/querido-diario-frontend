import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableCitiesComponent } from './available-cities.component';

describe('AvailableCitiesComponent', () => {
  let component: AvailableCitiesComponent;
  let fixture: ComponentFixture<AvailableCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableCitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
