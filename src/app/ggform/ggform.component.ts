import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {SimpleAnswersService} from "../models/simple-answers.service";
import {QuestionsManagerService} from "../models/questions-manager.service";
import {Subscription} from "rxjs";
import {Question} from "../models/question";

@Component({
  moduleId: module.id,
  selector: 'app-ggform',
  templateUrl: 'ggform.component.html',
  styleUrls: ['ggform.component.css']
})
export class GGFormComponent implements OnInit {

    private sub: Subscription;
    protected questionId: number;
    public question: Question;
    // public options;



    protected options = [
        'Sandals',
        'Athletic',
        'Kids',
        'Casual',
        'Work Shoes',
        'Something Else'
    ];

    constructor(protected simpleAnswers: SimpleAnswersService,
                protected router: Router,
                protected questions: QuestionsManagerService,
                private route: ActivatedRoute) {

        // this.questions.getQuestion(11);
        // console.log(this.route.params);

    }

    navigate(route){
        this.router.navigate([route]);
    }


    // get question(){
    //     console.log('fdsa');
    //     let a = this.questions.getQuestion(this.questionId);
    //     return a;
    // }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.questionId = (params['id'])? +params['id'] : 1; // (+) converts string 'id' to a number
            this.question = this.questions.getQuestion(this.questionId);
        });
    }

    onClick(option) {
        this.simpleAnswers.save(this.questionId, option);
        let id = (option.nextQuestion != undefined)? option.nextQuestion : this.question.nextQuestion;
        console.log(id, this.question, option.nextQuestion);
        this.router.navigate(['ggform', id]);

    }

    getName() {
        var funcNameRegex = /function (.{1,})\(/;
        var results = (funcNameRegex).exec((<any> this).constructor.toString());
        return (results && results.length > 1) ? results[1] : "";
    }

}
