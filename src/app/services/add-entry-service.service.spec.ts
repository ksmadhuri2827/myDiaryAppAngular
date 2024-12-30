import { TestBed } from '@angular/core/testing';

import { AddEntryServiceService } from './add-entry-service.service';

describe('AddEntryServiceService', () => {
  let service: AddEntryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddEntryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
