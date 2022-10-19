import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedModalComponent } from './advanced-modal.component';

describe('AdvancedModalComponent', () => {
  let component: AdvancedModalComponent;
  let fixture: ComponentFixture<AdvancedModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
