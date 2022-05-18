import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product/product.model';
import { ProductService } from './product.service';
import {Router, ActivatedRoute, Params, RouterModule} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input()
  searchText: any;
  products!: Product[];
  p: number = 1;
  count: number = 6;
  cateid:any;
  constructor(private productService:ProductService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params =>{
      this.cateid = params.get('id');
      console.log(this.cateid);
      if(this.cateid <= 0){
        this.products=this.productService.getProducts();
      }
      if(this.cateid>=1){
        this.products=this.productService.getProductsByCate(this.cateid);
      }
    });
  }
}
