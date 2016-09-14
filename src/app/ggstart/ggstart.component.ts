import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SimpleAnswersService} from "../models/simple-answers.service";

@Component({

    selector: 'app-ggstart',
    templateUrl: 'ggstart.component.html',
    styleUrls: ['ggstart.component.css']
})
export class GgstartComponent implements OnInit {

    constructor(protected router: Router,
                protected simpleAnswers: SimpleAnswersService) {

    }

    ngOnInit() {
        this.simpleAnswers.reset();
        console.log('fda');
        // this.router.navigate(['ggform']);

    }

}
