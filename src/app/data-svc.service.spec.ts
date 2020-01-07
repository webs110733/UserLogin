import { TestBed } from '@angular/core/testing';

import { DataSvcService } from './data-svc.service';

describe('DataSvcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataSvcService = TestBed.get(DataSvcService);
    expect(service).toBeTruthy();
  });
});
