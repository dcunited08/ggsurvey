/**
 * @author dcook
 */

import {Answer} from "./answer";
import {Questiontypes} from "./questiontypes.enum";
export class Question {


    id: Number;
    text: String;
    options: any;
    nextQuestion: any;
    type: Questiontypes;
    // private answers: [Answer] = null;

    constructor() {
        // this.answers = [new Answer()];
    }


}
