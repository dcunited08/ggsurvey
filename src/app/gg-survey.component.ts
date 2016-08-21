import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {HeroFormComponent} from './hero-form/hero-form.component';
import {SimpleAnswersService} from "./models/simple-answers.service";


@Component({
    moduleId: module.id,
    selector: 'gg-survey-app',
    templateUrl: 'gg-survey.component.html',
    styleUrls: ['gg-survey.component.css'],
    directives: [ROUTER_DIRECTIVES, HeroFormComponent],
    providers: [SimpleAnswersService]
})
export class GgSurveyAppComponent {

    constructor(protected simpleAnswers: SimpleAnswersService) {

    }

    title = 'gg-survey works!';

    get diagnostic() {
        return JSON.stringify(this.simpleAnswers);
    }

}
