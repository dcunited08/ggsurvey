/**
 * Created by dcook on 8/4/16.
 */
import {RouterConfig, provideRouter } from '@angular/router';
import {HeroFormComponent} from './hero-form';
import {LookingForQuestionComponent} from "./forms/looking-for-question/looking-for-question.component";
import {IStepQuestionComponent} from "./forms/istep-question/istep-question.component";
import {ArchTypeQuestionComponent} from "./forms/arch-type-question/arch-type-question.component";


const routes: RouterConfig = [
  { path: 'heroes', component: HeroFormComponent },
  { path: '', component: LookingForQuestionComponent },
  { path: 'i-step', component: IStepQuestionComponent },
  { path: 'arch-type', component: ArchTypeQuestionComponent },

  // { path: '**', component: PageNotFoundComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
