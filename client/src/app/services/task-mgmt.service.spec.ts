import { TestBed } from '@angular/core/testing';

import { TaskMgmtService } from './task-mgmt.service';

describe('TaskMgmtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskMgmtService = TestBed.get(TaskMgmtService);
    expect(service).toBeTruthy();
  });
});
