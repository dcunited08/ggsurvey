import {Injectable} from '@angular/core';
import {CookiesService} from "./cookies.service";
import {AngularFire} from "angularfire2";
import {ProductsManagerService} from "./products-manager.service";
import {ShopifyService} from "./shopify.service";

@Injectable()
export class SimpleAnswersService {


    protected _answers;
    protected _products;
    protected _uuid: string;
    protected cookieName: string = 'ggForm';

    constructor(protected cookieMgr: CookiesService,
                protected af: AngularFire,
                protected productMgr: ProductsManagerService,
                protected shopify: ShopifyService) {

        let asdf = this.cookieMgr.getCookie(this.cookieName);

        if (!_.isUndefined(asdf)) {
            this._uuid = asdf.value;
            this.load();
        } else {
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

    get products() {
        return this._products;
    }

    load() {

        const key = '/item';
        this.af.database.object(key)
            .subscribe((asdf) => {
                console.log(this.uuid, asdf);
                this._answers = (asdf[this.uuid]) ? asdf[this.uuid] : {};
                this.determineProducts(this.answers)
                    .then((products) => {
                        this._products = products;
                    });
            });

    }

    save(key, value: String) {
        this._answers[key] = value;
        const relative = this.af.database.object('/item');
        let obj = {};
        obj[this.uuid] = this.answers;
        relative.update(obj);
    }

    reset() {
        this._answers = {};
        this._products = {};
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

    determineProducts(answers) {

        answers = _.values(answers);
        answers = _.filter(answers, 'products');
        let p1 = _.flatten(_.map(answers, 'products'));
        console.log(p1);

        let p2 = _.groupBy(p1, 'id');
        console.log(p2);

        let p3 = _.mapValues(p2, (vals) => {
            return _.sumBy(vals, 'rating');
        });
        console.log(p3);

        return this.shopify.products
            .then((products) => {
                let products1 = _.keyBy(products, 'id');
                console.log(products1);
                for (let i in p3) {
                    console.log(i, p3[i]);
                    products1[i]['rating'] = p3[i];
                }

                let products2 = _.filter(products1, 'rating');
                let products3 = _.values(products2);
                let products4 = _.groupBy(products3, 'attrs.product_type');
                let products5 = _.map(products4, (typeProducts) => {

                    let product_type = _.get(typeProducts[0], 'attrs.product_type');

                    console.log(product_type);

                    if (product_type === '') {
                        return typeProducts;
                    } else {
                        return _.maxBy(typeProducts, 'rating');
                    }

                });

                products5 = _.flatten(products5);

                console.log(products2);
                console.log(products3);
                console.log(products4);
                console.log(products5);

                return (products5.length) ? products5 : [];
            });


    }


}
