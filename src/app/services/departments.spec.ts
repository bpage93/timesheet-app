import { TestBed } from '@angular/core/testing';

import { DepartmentsService } from './departmentsServices';

describe('Departments', () => {
  let service: DepartmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
