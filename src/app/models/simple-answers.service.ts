import {Injectable} from '@angular/core';
import {AngularFire} from "angularfire2";

@Injectable()
export class SimpleAnswersService {


    protected _answers = {};
    protected _uuid: string;

    constructor() {
        this.reset();
    }

    get uuid(): string{
        return this._uuid;
    }

    get answers(){
        return this._answers;
    }

    save(key, value: String){
        this._answers[key] = value;
    }

    reset(){
        this._answers = {};
        this._uuid = this.guid();
    }

    guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }

}
