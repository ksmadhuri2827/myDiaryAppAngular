import { TestBed } from '@angular/core/testing';

import { GetpastentriesService } from './getpastentries.service';

describe('GetpastentriesService', () => {
  let service: GetpastentriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetpastentriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
