import { TestBed } from '@angular/core/testing';

import { EducationGazettesService } from './education-gazettes.service';

describe('EducationGazettesService', () => {
  let service: EducationGazettesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducationGazettesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
