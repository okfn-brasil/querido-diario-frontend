import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEducationComponent } from './item.component';

describe('ItemEducationComponent', () => {
  let component: ItemEducationComponent;
  let fixture: ComponentFixture<ItemEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
