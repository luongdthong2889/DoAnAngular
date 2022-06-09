import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product-list/product.service';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(private productService:ProductService, public router:Router) { }
  products!: Product[];
  sendText:string;
  ngOnInit(): void {
    this.products=this.productService.getProducts();
  }
  onSearchChange(event:any){
    this.sendText=event;
  }
}
