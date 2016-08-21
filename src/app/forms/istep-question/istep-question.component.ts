import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SimpleAnswersService} from "../../models/simple-answers.service";

@Component({
  moduleId: module.id,
  selector: 'app-istep-question',
  templateUrl: 'istep-question.component.html',
  styleUrls: ['istep-question.component.css']
})
export class IStepQuestionComponent implements OnInit {

    constructor(protected simpleAnswers: SimpleAnswersService,
                protected router: Router) {
    }

  ngOnInit() {
      this.router.navigate(['arch-type'])
  }

}
