import { Product } from './../product/product.model';
export class Cart{
    product:Product;
    quantity:number;
    price:number;
    constructor(product:Product,quantity:number,price:number){
        this.product=product;
        this.quantity=quantity;
        this.price=price;
    }
}