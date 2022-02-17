import { TestBed } from '@angular/core/testing';

import { BarLibService } from './bar-lib.service';

describe('BarLibService', () => {
  let service: BarLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
