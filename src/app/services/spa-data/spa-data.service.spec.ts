import { TestBed } from '@angular/core/testing';

import { SpaDataService } from './spa-data.service';

describe('SpaDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpaDataService = TestBed.get(SpaDataService);
    expect(service).toBeTruthy();
  });
});
