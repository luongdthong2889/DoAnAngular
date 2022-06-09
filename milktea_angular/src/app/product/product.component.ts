import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacebookService, InitParams } from 'ngx-facebook';
import { ProductService } from '../product-list/product.service';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(private productService:ProductService, public router:Router,private facebookService: FacebookService) { }
  products!: Product[];
  sendText:string;
  ngOnInit(): void {
    this.products=this.productService.getProducts();
    this.initFacebookService();
    
  }
  onSearchChange(event:any){
    this.sendText=event;
  }
  private initFacebookService(): void {
    const initParams: InitParams = { xfbml:true, version:'v3.2'};
    this.facebookService.init(initParams);
  }

}
