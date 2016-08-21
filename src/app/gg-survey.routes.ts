/**
 * Created by dcook on 8/4/16.
 */
import {RouterConfig, provideRouter } from '@angular/router';
import {TestForm1Component} from './test-form1';

const routes: RouterConfig = [
  { path: 'test-form1', component: TestForm1Component },
  // { path: 'heroes', component: HeroListComponent },
  // { path: 'hero/:id', component: HeroDetailComponent },
  // { path: '**', component: PageNotFoundComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
