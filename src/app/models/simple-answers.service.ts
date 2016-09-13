import {Injectable} from '@angular/core';
import {CookiesService} from "./cookies.service";
import {AngularFire} from "angularfire2";

@Injectable()
export class SimpleAnswersService {


    protected _answers;
    protected _uuid: string;
    protected cookieName: string = 'ggForm';

    constructor(
        protected cookieMgr: CookiesService,
        protected af: AngularFire) {

        let asdf = this.cookieMgr.getCookie(this.cookieName);

        if(asdf.value.length > 0) {
            this._uuid = asdf.value;
            this.load();
        }else{
            this.reset();
        }

        console.log(asdf, this.uuid);


    }

    get uuid(): string {
        return this._uuid;
    }

    get answers() {
        return this._answers;
    }

    load(){

        const key = '/item';
        this.af.database.object(key)
            .subscribe((asdf) => {
                this._answers = (asdf[this.uuid])? asdf[this.uuid] : {};
            });

    }

    save(key, value: String) {
        this._answers[key] = value;
        const relative = this.af.database.object('/item');
        let obj = {};
        obj[this.uuid] = this.answers;
        // console.log(obj);
        relative.update(obj);
    }

    reset() {
        this._answers = {};
        this._uuid = this.guid();
        this.cookieMgr.setCookie(this.cookieName, this.uuid);
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
