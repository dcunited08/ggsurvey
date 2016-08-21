import { Injectable } from '@angular/core';
import {QUESTIONS} from "./mocks/questions";
import {ANSWERS} from "./mocks/answers";

@Injectable()
export class QuestionsService {

  constructor() { }

  getQuestions(){
    return QUESTIONS;
  }

  getAnswers(){
    return ANSWERS;
  }

}
