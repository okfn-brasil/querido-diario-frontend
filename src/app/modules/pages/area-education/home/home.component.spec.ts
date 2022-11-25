import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEducacaoComponent } from './home.component';

describe('HomeEducacaoComponent', () => {
  let component: HomeEducacaoComponent;
  let fixture: ComponentFixture<HomeEducacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeEducacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEducacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
