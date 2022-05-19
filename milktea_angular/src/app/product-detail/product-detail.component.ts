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
    new SubDetail('Latte Series'),new SubDetail('Thức uống đặc biệt'),new SubDetail('Trà sữa'),new SubDetail('Trà nguyên chất'),new SubDetail('Thức uống sáng tạo'),new SubDetail('Thức uống đá xay'),new SubDetail('Topping')
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
    this.sizeSelected='M';
    this.typeSelected='Latte Series';
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
