import { TestBed } from '@angular/core/testing';

import { TerritoryService } from './territory.service';

describe('TerritoryService', () => {
  let service: TerritoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerritoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
