import {Router} from "@angular/router";
import {SimpleAnswersService} from "./simple-answers.service";
export class SimpleQuestion {



    getName() {
        var funcNameRegex = /function (.{1,})\(/;
        var results = (funcNameRegex).exec((<any> this).constructor.toString());
        return (results && results.length > 1) ? results[1] : "";
    }
}
