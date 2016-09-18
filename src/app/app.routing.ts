/**
 * Created by dcook on 8/4/16.
 */
import { Routes, RouterModule } from '@angular/router';
import {HeroFormComponent} from './hero-form';
import {GGFormComponent} from "./ggform/ggform.component";
import {GgstartComponent} from "./ggstart/ggstart.component";
import {ModuleWithProviders} from "@angular/core";
import {GGResultsComponent} from "./ggresults/ggresults.component";
import {ShopifyComponent} from "./shopify/shopify.component";


const appRoutes: Routes = [
    { path: 'hero', component: HeroFormComponent },
    { path: '', component: GgstartComponent },
    { path: 'shopify', component: ShopifyComponent },
    { path: 'ggform', component: GGFormComponent },
    { path: 'ggresults', component: GGResultsComponent },
    { path: 'ggform/:id', component: GGFormComponent },
    // { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
