import {Injectable} from '@angular/core';

@Injectable()
export class ShopifyService {

    protected shopClient: any;

    constructor() {
        this.shopClient = ShopifyBuy.buildClient({
            apiKey: 'e772ada08caf0642b972d5422eb77fd0',
            domain: 'gogofootcare.myshopify.com',
            appId: '6'
        });


    }

    get products() {
        return this.shopClient.fetchAllProducts()
            .catch(function () {
                console.log('Request failed');
            });
    }

    newCart(){
        return this.shopClient.newCart();
    }

}
