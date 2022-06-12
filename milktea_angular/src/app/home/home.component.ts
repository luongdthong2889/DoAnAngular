import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { FacebookService, InitParams } from 'ngx-facebook';
import { ProductService } from '../product-list/product.service';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 3000, noPause: true, showIndicators: true } }
  ]
})
export class HomeComponent implements OnInit {
  
  constructor(private productService:ProductService, private facebookService: FacebookService) { }
  products!: Product[]
  ngOnInit(): void {
    this.products=this.productService.getProducts();
    this.initFacebookService();
  }
  private initFacebookService(): void {
    const initParams: InitParams = { xfbml:true, version:'v3.2'};
    this.facebookService.init(initParams);
  }

}
