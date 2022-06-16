import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-list/product.service';
import { Product } from '../product/product.model';
import { Order } from '../admin-order/order.model';
import { OrderService } from '../admin-order/order.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private productService:ProductService, private orderService:OrderService, private toastr:ToastrService) { }
  products!: Product[]
  orders!:Order[];
  ngOnInit(): void {
    this.products=this.productService.getProducts();
    this.orders = this.orderService.getOrders();  
  }
  onContact(){
    this.toastr.success('Tin nhắn của bạn đã được gửi','Thành Công')
  }
}
