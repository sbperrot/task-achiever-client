import { TestBed } from '@angular/core/testing';

import { Tasks.ServiceService } from './tasks.service.service';

describe('Tasks.ServiceService', () => {
  let service: Tasks.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tasks.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
