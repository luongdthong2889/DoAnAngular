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
  constructor(productService:ProductService,private cartService:CartService) { }

  ngOnInit(): void {
  
  }
  addToCartFromPI(){
    this.product.size='EU 35';
    this.product.types='Casual Shoes';
    this.cartService.addToCart(this.product,1);
  }
}
