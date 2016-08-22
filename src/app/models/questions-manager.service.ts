import { Injectable } from '@angular/core';
import {QUESTIONS} from "./mocks/questions";

declare var _ : any;

@Injectable()
export class QuestionsManagerService {

  constructor() { }

  getQuestions(){
      return QUESTIONS;
  }

  getQuestion(id: Number){
      return _.find(this.getQuestions(), {id: id});
  }

}
