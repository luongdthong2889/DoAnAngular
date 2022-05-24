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
    new SubDetail('M'),new SubDetail('L')
  ];
  types:SubDetail[]=[
    new SubDetail('100%'),new SubDetail('70%'),new SubDetail('50%'),new SubDetail('30%'),new SubDetail('0%')
  ];
  sugarTypes:SubDetail[]=[
    new SubDetail('100%'),new SubDetail('70%'),new SubDetail('50%'),new SubDetail('30%'),new SubDetail('0%')
  ];
  type:SubDetail;
  typeSelected:string;
  sugarTypeSelected: string;
  constructor(private productService:ProductService,private cartService:CartService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.product=this.productService.getProduct(this.id);
      }
    )
    this.sizeSelected='M';
    this.typeSelected='100%';
    this.sugarTypeSelected='100%';
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
    this.product.sugarTypes=this.sugarTypeSelected;
    this.cartService.addToCart(this.product,1)
  }
}
export class SubDetail{
  public name : string;
  constructor(name:string){
    this.name=name;
  }
}
