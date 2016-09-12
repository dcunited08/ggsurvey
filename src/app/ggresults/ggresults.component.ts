import {Component, OnInit} from '@angular/core';
import {SimpleAnswersService} from "../models/simple-answers.service";

@Component({
    selector: 'app-ggresults',
    templateUrl: './ggresults.component.html',
    styleUrls: ['./ggresults.component.css']
})
export class GGResultsComponent implements OnInit {

    constructor(
        protected simpleAnswers: SimpleAnswersService) {
    }

    ngOnInit() {
    }

    get SimpleAnswers(){
        console.log(this.simpleAnswers.answers);
        return JSON.stringify(this.simpleAnswers.answers);
    }

}
