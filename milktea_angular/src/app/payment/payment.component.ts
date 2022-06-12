import { CartService } from './../cart/cart.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart/cart.model';
import { User } from '../cart/user.model';
import { PaymentService } from './payment.service';
import { ProductService } from '../product-list/product.service';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  cart:Cart[];
  user:User;
  totalPrice:number;
  products!: Product[]
  constructor(private productService:ProductService, private paymentService:PaymentService,private toastr:ToastrService,private cartService:CartService) { }
  
  ngOnInit(): void {
    this.products=this.productService.getProducts();
    this.user=this.paymentService.GetInfoUser();
    this.cart=this.cartService.getCart();
    this.totalPrice=0;
    this.cart.forEach(i => {
      this.totalPrice+=i.price;
      console.log(i.product.name + 'Size' + i.product.size + i.product.types + 'Đá' + i.product.sugarTypes + 'Đường');
    });
  }
  clickPayment(){
    this.cartService.cartClear();
    this.toastr.success('Hoàn tất thanh toán','Thanh toán');
  }

}
