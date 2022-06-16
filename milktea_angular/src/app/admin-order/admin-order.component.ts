import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cart } from '../cart/cart.model';
import { CartService } from '../cart/cart.service';
import { User } from '../cart/user.model';
import { PaymentService } from '../payment/payment.service';
import { ProductService } from '../product-list/product.service';
import { Product } from '../product/product.model';
import { OrderFB } from './orderfb.model';
import { OrderService } from './orderservice';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.css']
})
export class AdminOrderComponent implements OnInit {
  @Input() index:number;
  products!: Product[];
  cart:Cart[];
  user:User;
  searchText: any;

  orderfb:OrderFB[];
  constructor( private orderservice:OrderService,private productService:ProductService, private paymentService:PaymentService,private toastr:ToastrService,private cartService:CartService,private router:Router,private route:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.products=this.productService.getProducts();
    this.user=this.paymentService.GetInfoUser();
    this.cart=this.cartService.getCart();
    this.orderfb = this.orderservice.getOrderFB();
  }
}
