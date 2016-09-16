import {Component, OnInit} from '@angular/core';
import {SimpleAnswersService} from "../models/simple-answers.service";
import * as _ from 'lodash';
import {ProductsManagerService} from "../models/products-manager.service";

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

    get SimpleAnswers() {
        return JSON.stringify(this.simpleAnswers.answers);
    }

    get UUID() {
        return this.simpleAnswers.uuid;
    }

    get products() {
        return this.simpleAnswers.products;
    }



}
