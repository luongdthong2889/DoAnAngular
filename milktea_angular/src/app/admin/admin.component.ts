import { LoginService } from './../admin-login/admin-login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product/product.model';
import { ProductService } from '../product-list/product.service';
import { OrderService } from '../admin-order/order.service';
import { Order } from '../admin-order/order.model';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  products!: Product[];
  orders!: Order[];
  constructor(private productService:ProductService,private orderService:OrderService,private router:Router,private adminLogin:LoginService) { }

  ngOnInit(): void {
    this.products=this.productService.getProducts();
    this.orders=this.orderService.getOrders();
  }
  backToClient(){
    this.router.navigate(['../product'])
  }
  logOut(){
    this.adminLogin.LogOut();
  }
}
