import { Cart } from '../cart/cart.model';
import { User } from '../cart/user.model';
import { Product } from './../product/product.model';
export class OrderFB{
    cart:Cart;
    user:User;
    totalPrice:number;
    constructor(cart:Cart,user:User,totalprice:number){
        this.cart = cart;
        this.user = user;
        this.totalPrice = totalprice;
    }
}