/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShopifyService } from './shopify.service';

describe('Service: Shopify', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopifyService]
    });
  });

  it('should ...', inject([ShopifyService], (service: ShopifyService) => {
    expect(service).toBeTruthy();
  }));
});
