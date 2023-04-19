import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCnpjComponent } from './info-cnpj.component';

describe('InfoCnpjComponent', () => {
  let component: InfoCnpjComponent;
  let fixture: ComponentFixture<InfoCnpjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCnpjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCnpjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
