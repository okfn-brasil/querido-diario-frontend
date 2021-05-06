import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessLevelsComponent } from './access-levels.component';

describe('AccessLevelsComponent', () => {
  let component: AccessLevelsComponent;
  let fixture: ComponentFixture<AccessLevelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessLevelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
