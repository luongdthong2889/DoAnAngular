import { CartService } from './../cart/cart.service';
import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../product-list/product.service';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product:Product;
  @Input() index:number;
  products!: Product[]
  constructor(private productService:ProductService,private cartService:CartService) { }
  
  ngOnInit(): void {
    this.products=this.productService.getProducts();
  }
  addToCartFromPI(){
    this.product.size='M';
    this.product.types='100%';
    this.product.sugarTypes='100%';
    this.cartService.addToCart(this.product,1);
  }
}
