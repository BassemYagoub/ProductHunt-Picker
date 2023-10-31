import { TestBed } from '@angular/core/testing';

import { ProductHuntFetcherService } from './product-hunt-fetcher.service';

describe('ProductHuntFetcherService', () => {
  let service: ProductHuntFetcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductHuntFetcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
