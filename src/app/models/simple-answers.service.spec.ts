/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { SimpleAnswersService } from './simple-answers.service';

describe('Service: SimpleAnswers', () => {
  beforeEach(() => {
    addProviders([SimpleAnswersService]);
  });

  it('should ...',
    inject([SimpleAnswersService],
      (service: SimpleAnswersService) => {
        expect(service).toBeTruthy();
      }));
});
