import {Injectable} from '@angular/core';

@Injectable()
export class SimpleAnswersService {


    protected answers = {};

    constructor() {

    }

    save(key, value: String){
        this.answers[key] = value;
    }

    reset(){
        this.answers = {};
    }

}
