
import { Injectable } from "@angular/core";
import { Cart } from "../cart/cart.model";
import { User } from "../cart/user.model";

@Injectable({
    providedIn:'root',
})
export class PaymentService{
     user: User;
     count:number;
     
    AddBill(user:User){
        this.user=user;
    }
    GetInfoUser(){
        return this.user;
    }
}