import {Injectable} from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class CookiesService {

    constructor() {
    }

    getCookie(name: string): Cookie {
        let ca: Array<string> = document.cookie.split(';');
        let caLen: number = ca.length;
        let cookieName = name + "=";
        let c: string;

        let cookies = ca.map((item) => {
            item = _.trim(item);
            let _c = item.split('=');
            let cookie = new Cookie();
            cookie.key = _c[0];
            cookie.value = _c[1];
            return cookie;
        });

        return _.find(cookies, ['key', name]);
    }

    deleteCookie(name) {
        this.setCookie(name, "", -1);
    }

    setCookie(name: string, value: string, expireDays: number = 30, path: string = "") {
        let d: Date = new Date();
        d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
        let expires: string = "expires=" + d.toUTCString();
        document.cookie = name + "=" + value + "; " + expires + (path.length > 0 ? "; path=" + path : "");
    }

}

export class Cookie{
    key;
    value;
}
