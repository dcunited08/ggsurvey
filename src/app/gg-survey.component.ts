import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeroFormComponent } from './hero-form/hero-form.component';


@Component({
  moduleId: module.id,
  selector: 'gg-survey-app',
  templateUrl: 'gg-survey.component.html',
  styleUrls: ['gg-survey.component.css'],
  directives: [ROUTER_DIRECTIVES, HeroFormComponent]
})
export class GgSurveyAppComponent {
  title = 'gg-survey works!';
}
