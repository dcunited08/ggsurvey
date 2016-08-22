import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {HeroFormComponent} from './hero-form/hero-form.component';
import {SimpleAnswersService} from "./models/simple-answers.service";
import {GGFormComponent} from "./ggform/ggform.component";
import {Question} from "./models/question";
import {QuestionsManagerService} from "./models/questions-manager.service";


@Component({
    moduleId: module.id,
    selector: 'gg-survey-app',
    templateUrl: 'gg-survey.component.html',
    styleUrls: ['gg-survey.component.css'],
    directives: [ROUTER_DIRECTIVES, HeroFormComponent],
    providers: [SimpleAnswersService, QuestionsManagerService]
})
export class GgSurveyAppComponent {

    constructor(protected simpleAnswers: SimpleAnswersService) {

    }

    title = 'gg-survey works!';

    get diagnostic() {
        return JSON.stringify(this.simpleAnswers);
    }

}
