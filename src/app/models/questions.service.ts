import { Injectable } from '@angular/core';
import {QUESTIONS} from "./mocks/questions";
import {ANSWERS} from "./mocks/answers";
import * as _ from 'lodash';

@Injectable()
export class QuestionsService {

  constructor() { }

  getQuestions(){
    return QUESTIONS;
  }

  getAnswers(){
    return ANSWERS;
  }

  getQuestion(id){
      

  }

}
