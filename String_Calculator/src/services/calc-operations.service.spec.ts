import { TestBed } from '@angular/core/testing';

import { CalcOperationsService } from './calc-operations.service';

describe('CalcOperationsService', () => {
  let service: CalcOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
