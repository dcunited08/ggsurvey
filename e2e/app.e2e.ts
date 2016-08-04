import { GgSurveyPage } from './app.po';

describe('gg-survey App', function() {
  let page: GgSurveyPage;

  beforeEach(() => {
    page = new GgSurveyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('gg-survey works!');
  });
});
