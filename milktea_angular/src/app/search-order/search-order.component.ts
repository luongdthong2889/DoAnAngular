import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../admin-order/order.model';
import { OrderService } from '../admin-order/order.service';
import { ProductService } from '../product-list/product.service';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-search-order',
  templateUrl: './search-order.component.html',
  styleUrls: ['./search-order.component.css']
})
export class SearchOrderComponent implements OnInit {
  searchText!:string;
  @Output() searchChange= new EventEmitter<string>();
  products!: Product[];
  orders!:Order[];
  id: any;
  constructor(private productService:ProductService, private orderService:OrderService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params =>{
      this.id = params.get('id');
      console.log(this.id);
    })
    this.products=this.productService.getProducts();
    this.orders = this.orderService.getOrders(); 
  }
  searchTextChange(){
    this.searchChange.emit(this.searchText);
  }
}
