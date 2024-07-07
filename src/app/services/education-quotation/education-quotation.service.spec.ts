import { TestBed } from '@angular/core/testing';

import { EducationAnalysisQuotationService } from './education-quotation.service';

describe('EducationAnalysisQuotationService', () => {
  let service: EducationAnalysisQuotationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducationAnalysisQuotationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
