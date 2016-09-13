import {Component, OnInit} from '@angular/core';
import {SimpleAnswersService} from "../models/simple-answers.service";
import * as _ from 'lodash';
import {ProductsManagerService} from "../models/products-manager.service";

@Component({
    selector: 'app-ggresults',
    templateUrl: './ggresults.component.html',
    styleUrls: ['./ggresults.component.css']
})
export class GGResultsComponent implements OnInit {

    constructor(
        protected productMgr: ProductsManagerService,
        protected simpleAnswers: SimpleAnswersService) {
    }

    ngOnInit() {
        this.determineProducts();
    }

    get SimpleAnswers() {
        return JSON.stringify(this.simpleAnswers.answers);
    }

    get UUID() {
        return this.simpleAnswers.uuid;
    }

    get products() {
        return this.determineProducts();
    }

    determineProducts() {

        let p1 = _.mapValues(this.simpleAnswers.answers, 'product');
        let p2 = _.groupBy(p1, 'id');
        delete p2['undefined'];

        let p3 = _.mapValues(p2, (p) => {
            return _.sumBy(p, 'rating');
        });

        let products = this.productMgr.get();
        products = _.map(products, (product) => {
           if(p3[product.id]){
               product['rating'] = p3[product.id];
           }
           return product;
        });

        products = _.filter(products, 'rating');
        let products2 = _.groupBy(products, 'type');
        let products3 = _.map(products2, (typeProducts) => {
            return _.maxBy(typeProducts, 'rating');
        });

        return (products3.length)? products3 : [];
    }

}
