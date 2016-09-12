import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AngularFireModule} from 'angularfire2';

// import { routing, appRoutingProviders } from './app.routing';
import {GgstartComponent} from "./ggstart/ggstart.component";

// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyAprQ4eLHCbk35_lPLdgt_cqCS5B7ReuZQ",
    authDomain: "gogofootcare-5e6b0.firebaseapp.com",
    databaseURL: "https://gogofootcare-5e6b0.firebaseio.com",
    storageBucket: "gogofootcare-5e6b0.appspot.com",
};

@NgModule({
    declarations: [
        AppComponent,
        // GgstartComponent

    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AngularFireModule.initializeApp(firebaseConfig),
        // routing
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
