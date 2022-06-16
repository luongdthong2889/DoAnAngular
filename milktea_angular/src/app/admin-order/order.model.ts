import { Cart } from '../cart/cart.model';
import { User } from '../cart/user.model';
import { Product } from '../product/product.model';
export class Order{
    id: number;
    cart:Cart;
    user:User;
    totalPrice:number;
    constructor(id:number,cart:Cart,user:User,totalprice:number){
        this.id = id;
        this.cart = cart;
        this.user = user;
        this.totalPrice = totalprice;
    }
}