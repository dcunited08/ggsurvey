import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {SimpleAnswersService} from "../models/simple-answers.service";
import {QuestionsManagerService} from "../models/questions-manager.service";
import {Subscription} from "rxjs";
import {Question} from "../models/question";
import {Questiontypes} from "../models/questiontypes.enum";

@Component({

    selector: 'app-ggform',
    templateUrl: 'ggform.component.html',
    styleUrls: ['ggform.component.css'],
    // providers: [Qu]
})
export class GGFormComponent implements OnInit {

    private sub: Subscription;
    protected questionId: number;
    public question: Question;

    constructor(protected simpleAnswers: SimpleAnswersService,
                protected router: Router,
                protected questions: QuestionsManagerService,
                private route: ActivatedRoute,
    ) {

    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.questionId = (params['id']) ? +params['id'] : 1;
            this.question = this.questions.getQuestion(this.questionId);
            console.log(this.questionId, Questiontypes[this.question.type]);

        });
    }

    onClick(option) {
        this.simpleAnswers.save(this.questionId, option);

        let id = (option.nextQuestion != undefined) ? option.nextQuestion : this.question.nextQuestion;
        this.router.navigate(['ggform', id]);
    }

    getName() {
        var funcNameRegex = /function (.{1,})\(/;
        var results = (funcNameRegex).exec((<any> this).constructor.toString());
        return (results && results.length > 1) ? results[1] : "";
    }


}
