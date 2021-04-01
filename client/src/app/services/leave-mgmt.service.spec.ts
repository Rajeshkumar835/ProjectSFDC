import { TestBed } from '@angular/core/testing';

import { LeaveMgmtService } from './leave-mgmt.service';

describe('LeaveMgmtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeaveMgmtService = TestBed.get(LeaveMgmtService);
    expect(service).toBeTruthy();
  });
});
