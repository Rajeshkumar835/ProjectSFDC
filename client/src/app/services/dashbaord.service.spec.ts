import { TestBed } from '@angular/core/testing';

import { DashbaordService } from './dashbaord.service';

describe('DashbaordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashbaordService = TestBed.get(DashbaordService);
    expect(service).toBeTruthy();
  });
});
