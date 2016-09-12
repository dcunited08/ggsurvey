import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {HeroFormComponent} from './hero-form/hero-form.component';
import {SimpleAnswersService} from "./models/simple-answers.service";
import {GGFormComponent} from "./ggform/ggform.component";
import {Question} from "./models/question";
import {QuestionsManagerService} from "./models/questions-manager.service";
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [SimpleAnswersService]
})
export class AppComponent {
    items: FirebaseListObservable<any[]>;
    constructor(protected simpleAnswers: SimpleAnswersService,
                af: AngularFire
    ) {

        this.items = af.database.list('items');

    }

    title = 'gg-survey works!';

    get diagnostic() {
        // return 'bob';
        return JSON.stringify(this.simpleAnswers);
    }
}
