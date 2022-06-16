import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../admin-order/order.model';
import { OrderService } from '../admin-order/order.service';
import { ProductService } from '../product-list/product.service';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-admin-product-item',
  templateUrl: './admin-product-item.component.html',
  styleUrls: ['./admin-product-item.component.css']
})
export class AdminProductItemComponent implements OnInit {

  @Input() product!:Product;
  @Input() index!:number;
  products!: Product[];
  orders:Order[];
  constructor(private productService:ProductService, private orderService:OrderService,private router:Router) { }
  
  ngOnInit(): void {
    this.products=this.productService.getProducts();
    this.orders = this.orderService.getOrders();  
  }
  deleteProduct(){
    this.productService.deleteProduct(this.product.id); 
    this.router.navigate(['../admin/product'])
  }
}
