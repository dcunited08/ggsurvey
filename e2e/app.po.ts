export class GgSurveyPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('gg-survey-app h1')).getText();
  }
}
