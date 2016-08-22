/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { QuestionsMgrService } from './questions-mgr.service';

describe('Service: QuestionsMgr', () => {
  beforeEach(() => {
    addProviders([QuestionsMgrService]);
  });

  it('should ...',
    inject([QuestionsMgrService],
      (service: QuestionsMgrService) => {
        expect(service).toBeTruthy();
      }));
});
