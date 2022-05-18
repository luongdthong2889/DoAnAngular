import { CartService } from './../cart/cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { Product } from '../product/product.model';
import { ProductService } from '../product-list/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product:Product;
  p:Product[];
  id:number;
  sizeSelected:string;
  sizes:SubDetail[]=[
    new SubDetail('EU 35'),new SubDetail('EU 35.5'),new SubDetail('EU 36'),new SubDetail('EU 36.5'),new SubDetail('EU 37.5'),
    new SubDetail('EU 38'),new SubDetail('EU 38.5'),new SubDetail('EU 39'),new SubDetail('EU 40'),new SubDetail('EU 41'),new SubDetail('EU 42')
  ];
  types:SubDetail[]=[
    new SubDetail('Casual Shoes'),new SubDetail('Sneakers'),new SubDetail('Formal Shoes')
  ]
  type:SubDetail;
  typeSelected:string;
  constructor(private productService:ProductService,private cartService:CartService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.product=this.productService.getProduct(this.id);
      }
    )
    this.sizeSelected='EU 35';
    this.typeSelected='Casual Shoes';
    this.p=this.productService.getFeatureProducts();
    this.router.events.subscribe((evt)=>{
      if(!(evt instanceof NavigationEnd)){
        return;
      }
      window.scrollTo(0,0)
    })
  }
  onSizeSelected(size:any){
    this.sizeSelected=size;
    console.log(this.sizeSelected);
  }
  
  
  addToCart(){
    this.product.size=this.sizeSelected;
    this.product.types=this.typeSelected;
    this.cartService.addToCart(this.product,1)
  }
}
export class SubDetail{
  public name : string;
  constructor(name:string){
    this.name=name;
  }
}
