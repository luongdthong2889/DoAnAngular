import { CartService } from './../cart/cart.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart/cart.model';
import { User } from '../cart/user.model';
import { PaymentService } from './payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  cart:Cart[];
  user:User;
  totalPrice:number;
  constructor(private paymentService:PaymentService,private toastr:ToastrService,private cartService:CartService) { }

  ngOnInit(): void {
    this.user=this.paymentService.GetInfoUser();
    this.cart=this.cartService.getCart();
    this.totalPrice=0;
    this.cart.forEach(i => {
      this.totalPrice+=i.price;
      console.log(i.product.name + i.product.size + i.product.types);
    });
  }
  clickPayment(){
    this.cartService.cartClear();
    this.toastr.success('Payment Complete','Payment');
  }

}
