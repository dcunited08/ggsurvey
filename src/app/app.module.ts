import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {
    routing,
    appRoutingProviders
} from './app.routing';
import {AngularFireModule} from 'angularfire2';

import {GgstartComponent} from "./ggstart/ggstart.component";
import {SimpleAnswersService} from "./models/simple-answers.service";
import {HeroFormComponent} from "./hero-form/hero-form.component";
import {GGFormComponent} from "./ggform/ggform.component";
import {QuestionsManagerService} from "./models/questions-manager.service";
import {GGResultsComponent} from './ggresults/ggresults.component';
import {CookiesService} from "./models/cookies.service";
import {ProductsManagerService} from "./models/products-manager.service";
import { ShopifyComponent } from './shopify/shopify.component';
import {ShopifyService} from "./models/shopify.service";

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
        GgstartComponent,
        HeroFormComponent,
        GGFormComponent,
        GGResultsComponent,
        ShopifyComponent

    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AngularFireModule.initializeApp(firebaseConfig),
        routing
    ],
    providers: [
        SimpleAnswersService,
        appRoutingProviders,
        QuestionsManagerService,
        CookiesService,
        ProductsManagerService,
        ShopifyService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
