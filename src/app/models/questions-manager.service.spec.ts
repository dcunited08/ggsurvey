/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { QuestionsManagerService } from './questions-manager.service';

describe('Service: QuestionsManager', () => {
  beforeEach(() => {
    addProviders([QuestionsManagerService]);
  });

  it('should ...',
    inject([QuestionsManagerService],
      (service: QuestionsManagerService) => {
        expect(service).toBeTruthy();
      }));
});
