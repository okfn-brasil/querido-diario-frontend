import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselEducacaoComponent } from './carousel.component';

describe('HomeComponent', () => {
  let component: CarouselEducacaoComponent;
  let fixture: ComponentFixture<CarouselEducacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselEducacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselEducacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
