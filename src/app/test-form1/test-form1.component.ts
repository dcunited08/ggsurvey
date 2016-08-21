import {Component, OnInit} from '@angular/core';
import {HeroFormComponent} from '../hero-form/hero-form.component';
import {QuestionsService} from "../models/questions.service";

@Component({
  moduleId: module.id,
  selector: 'app-test-form1',
  templateUrl: 'test-form1.component.html',
  styleUrls: ['test-form1.component.css'],
  directives: [HeroFormComponent],
  providers: [QuestionsService]
})
export class TestForm1Component implements OnInit {

  questions;

  constructor(questionsService: QuestionsService) {
    this.questions = questionsService.getQuestions();
  }

  ngOnInit() {
  }

  get diagnostic() {
    return JSON.stringify(this.questions);
  }

}
