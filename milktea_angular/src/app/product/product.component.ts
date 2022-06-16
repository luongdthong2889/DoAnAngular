import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../admin-order/order.model';
import { OrderService } from '../admin-order/order.service';
import { ProductService } from '../product-list/product.service';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(private productService:ProductService, private orderService:OrderService, public router:Router) { }
  products!: Product[];
  orders!:Order[];
  sendText:string;
  ngOnInit(): void {
    this.products=this.productService.getProducts();
    this.orders = this.orderService.getOrders(); 
  }
  onSearchChange(event:any){
    this.sendText=event;
  }
}
