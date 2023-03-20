import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassResetComponent } from './pass-reset.component';

describe('PassResetComponent', () => {
  let component: PassResetComponent;
  let fixture: ComponentFixture<PassResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassResetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
