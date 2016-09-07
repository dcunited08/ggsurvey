import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {GgSurveyAppComponent, environment} from './app/';
import {appRouterProviders} from './app/gg-survey.routes';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
    enableProdMode();
}

// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyAprQ4eLHCbk35_lPLdgt_cqCS5B7ReuZQ",
    authDomain: "gogofootcare-5e6b0.firebaseapp.com",
    databaseURL: "https://gogofootcare-5e6b0.firebaseio.com",
    storageBucket: "gogofootcare-5e6b0.appspot.com",
};

bootstrap(GgSurveyAppComponent, [
    FIREBASE_PROVIDERS,
    // Initialize Firebase app
    defaultFirebase(firebaseConfig),
    appRouterProviders,
    disableDeprecatedForms(),
    provideForms()
]);


