import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-list/product.service';
import { Product } from '../product/product.model';
import { Order } from '../admin-order/order.model';
import { OrderService } from '../admin-order/order.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  _opened: boolean = false;
  products!: Product[]
  orders!:Order[];
  _toggleSidebar() {
    this._opened = !this._opened;
  }
  constructor(private productService:ProductService, private orderService:OrderService, public router:Router) { }
  
  ngOnInit(): void {
    this.products=this.productService.getProducts();
    this.orders = this.orderService.getOrders();  
  }
  
}
