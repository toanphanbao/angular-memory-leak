import { TestBed } from '@angular/core/testing';

import { RandomService } from './random.service';

describe('RandomServiceService', () => {
  let service: RandomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
