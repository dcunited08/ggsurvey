import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { GgSurveyAppComponent } from '../app/gg-survey.component';

beforeEachProviders(() => [GgSurveyAppComponent]);

describe('App: GgSurvey', () => {
  it('should create the app',
      inject([GgSurveyAppComponent], (app: GgSurveyAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'gg-survey works!\'',
      inject([GgSurveyAppComponent], (app: GgSurveyAppComponent) => {
    expect(app.title).toEqual('gg-survey works!');
  }));
});
