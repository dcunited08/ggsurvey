/**
 * Created by dcook on 8/4/16.
 */
import { Routes, RouterModule } from '@angular/router';
import {HeroFormComponent} from './hero-form';
import {IStepQuestionComponent} from "./forms/istep-question/istep-question.component";
import {ArchTypeQuestionComponent} from "./forms/arch-type-question/arch-type-question.component";
import {GGFormComponent} from "./ggform/ggform.component";
import {GgstartComponent} from "./ggstart/ggstart.component";
import {ModuleWithProviders} from "@angular/core";


const appRoutes: Routes = [
  // { path: 'heroes', component: HeroFormComponent },
  { path: '', component: GgstartComponent },
  // { path: 'ggform', component: GGFormComponent },
  // { path: 'ggform/:id', component: GGFormComponent },
  // { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
