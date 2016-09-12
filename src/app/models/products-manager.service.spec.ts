/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductsManagerService } from './products-manager.service';

describe('Service: ProductsManager', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsManagerService]
    });
  });

  it('should ...', inject([ProductsManagerService], (service: ProductsManagerService) => {
    expect(service).toBeTruthy();
  }));
});
