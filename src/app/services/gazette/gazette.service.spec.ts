import { TestBed } from '@angular/core/testing';

import { GazetteService } from './gazette.service';

describe('GazetteService', () => {
  let service: GazetteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GazetteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
