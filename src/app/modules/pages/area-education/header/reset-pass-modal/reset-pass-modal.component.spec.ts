import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPassModalComponent } from './reset-pass-modal.component';

describe('ResetPassModalComponent', () => {
  let component: ResetPassModalComponent;
  let fixture: ComponentFixture<ResetPassModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetPassModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPassModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
