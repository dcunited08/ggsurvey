import {Component, OnInit} from '@angular/core';
import {ShopifyService} from "../models/shopify.service";

@Component({
    selector: 'app-shopify',
    templateUrl: './shopify.component.html',
    styleUrls: ['./shopify.component.css']
})
export class ShopifyComponent implements OnInit {

    products: [{}];

    constructor(protected shopify: ShopifyService) {

    }

    ngOnInit() {

        this.shopify.products
            .then((products) => {
                console.log(products[0].attrs);
                this.products = products;
            });


    }

}
