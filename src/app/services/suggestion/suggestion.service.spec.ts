import { TestBed } from '@angular/core/testing';

import { SuggestionService } from './suggestion.service';

describe('SuggestionService', () => {
  let service: SuggestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuggestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
