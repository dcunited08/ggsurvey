import {Injectable} from '@angular/core';
import {PRODUCTS} from "./mocks/products";

@Injectable()
export class ProductsManagerService {

    constructor() {
    }

    get() {
        return PRODUCTS;
    }

}
