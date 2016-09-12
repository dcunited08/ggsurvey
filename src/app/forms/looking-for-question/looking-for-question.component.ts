import {Component, OnInit} from '@angular/core';
import {SimpleAnswersService} from "../../models/simple-answers.service";
import { Router} from '@angular/router';
import {SimpleQuestion} from "../../models/simple-question";


@Component({

    selector: 'app-looking-for-question',
    templateUrl: 'looking-for-question.component.html',
    styleUrls: ['looking-for-question.component.css']
})
export class LookingForQuestionComponent extends SimpleQuestion implements OnInit {

    protected options = [
        'Sandals',
        'Athletic',
        'Kids',
        'Casual',
        'Work Shoes',
        'Something Else'
    ];

    constructor(protected simpleAnswers: SimpleAnswersService,
                protected router: Router) {
        super();
    }

    navigate(route){
        this.router.navigate([route]);
    }



    ngOnInit() {
    }

    onClick(option) {
        this.simpleAnswers.save(this.getName(), option);
        if (option != 'Something Else') {
            this.navigate('/i-step');
        }
    }

}
