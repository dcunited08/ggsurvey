import { Component, OnInit } from '@angular/core';
import {SimpleAnswersService} from "../../models/simple-answers.service";
import {Router} from "@angular/router";
import {SimpleQuestion} from "../../models/simple-question";

@Component({
  moduleId: module.id,
  selector: 'app-arch-type-question',
  templateUrl: 'arch-type-question.component.html',
  styleUrls: ['arch-type-question.component.css']
})
export class ArchTypeQuestionComponent extends SimpleQuestion implements OnInit {

    protected options = [
        'High',
        'Medium',
        'Low',
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
