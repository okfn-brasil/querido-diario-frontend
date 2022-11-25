import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnpjComponent } from './cnpj.component';

describe('CnpjComponent', () => {
  let component: CnpjComponent;
  let fixture: ComponentFixture<CnpjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CnpjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CnpjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
