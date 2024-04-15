import { TestBed } from '@angular/core/testing';

import { ApiCoincapService } from './api-coincap.service';

describe('ApiCoincapServiceService', () => {
  let service: ApiCoincapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCoincapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
