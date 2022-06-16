import { Component, OnInit } from '@angular/core';
import { Order } from '../admin-order/order.model';
import { OrderService } from '../admin-order/order.service';
import { ProductService } from '../product-list/product.service';
import { Product } from '../product/product.model';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private productService:ProductService, private orderService:OrderService) { }
  products!: Product[]
  orders!:Order[];
  ngOnInit(): void {
    this.products=this.productService.getProducts();
    this.orders = this.orderService.getOrders();  
  }

}
