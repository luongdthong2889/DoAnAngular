import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../admin-order/order.model';
import { OrderService } from '../admin-order/order.service';
import { ProductService } from '../product-list/product.service';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {

  products!: Product[];
  orders:Order[];
  searchText: any;
  constructor(private productService:ProductService, private orderService:OrderService,private router:Router,private route:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.products=this.productService.getProducts();
    this.orders = this.orderService.getOrders();   
  }
  onNewProduct(){
    this.router.navigate(['new'],{relativeTo:this.route});
  }
}
