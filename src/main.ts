import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { GgSurveyAppComponent, environment } from './app/';
import { appRouterProviders } from './app/gg-survey.routes';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

if (environment.production) {
  enableProdMode();
}

bootstrap(GgSurveyAppComponent, [
  appRouterProviders,
  disableDeprecatedForms(),
  provideForms()
]);


