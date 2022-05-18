import { Product } from './../product/product.model';
import { Cart } from './cart.model';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
    providedIn:'root',
})
export class CartService{
    cart:Cart[]=[];
    product:Product;
    constructor(private toastr:ToastrService){

    }
    addToCart(product:Product,quantity:number){
        this.product = new Product(product.id,product.name,product.price,product.imagePath,product.description,product.information,product.cateid);
        this.product.size=product.size;
        this.product.types=product.types;
        var cartItem;
        if(this.cart.length>0){
            var temp=false;
            this.cart.forEach(i => {
                if(i.product.types==this.product.types && i.product.name == this.product.name && i.product.size == this.product.size)
                {
                    i.quantity+=quantity;
                    i.price=i.product.price*i.quantity;
                    temp=true;
                    this.toastr.success('Buy a '+i.product.name,'Success');
                }
            });
            if(temp==false){
                var price = this.product.price*quantity;
                cartItem = new Cart(this.product,quantity,price);
                this.cart.push(cartItem);
                this.toastr.success('Buy a '+cartItem.product.name,'Success');
            }
        }
        else{
            var price = this.product.price*quantity;
            cartItem = new Cart(this.product,quantity,price);
            this.cart.push(cartItem);
            this.toastr.success('Buy a '+cartItem.product.name,'Success');
        }
    }
    getCart(){
        return this.cart;
    }
    updatePrice(index:number){
        this.cart[index].price=this.cart[index].product.price*this.cart[index].quantity;
    }
    cartClear(){
        this.cart=[];
    }
}