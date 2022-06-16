import { Product } from './../product/product.model';
import { ProductService } from './../product-list/product.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { LabelType, Options } from '@angular-slider/ngx-slider';
import { Category } from '../product/cate.model';
import {Router, ActivatedRoute, Params, RouterModule} from '@angular/router';
import { Order } from '../admin-order/order.model';
import { OrderService } from '../admin-order/order.service';



@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {
  searchText!:string;
  @Output() searchChange= new EventEmitter<string>();
  specialDeal!:Product[];
  cate!:Category[];
  cateid:any;
  products!: Product[];
  orders!:Order[];
  constructor(private productService:ProductService, private orderService:OrderService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params =>{
      this.cateid = params.get('id');
      console.log(this.cateid);
    })
    this.products=this.productService.getProducts();
    this.orders = this.orderService.getOrders(); 
    this.specialDeal=this.productService.getFeatureProducts();
    this.cate = this.productService.getCate();
  }
  searchTextChange(){
    this.searchChange.emit(this.searchText);
  }
  
   

}
