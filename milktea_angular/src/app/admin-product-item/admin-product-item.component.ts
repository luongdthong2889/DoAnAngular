import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product-list/product.service';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-admin-product-item',
  templateUrl: './admin-product-item.component.html',
  styleUrls: ['./admin-product-item.component.css']
})
export class AdminProductItemComponent implements OnInit {

  @Input() product!:Product;
  @Input() index!:number;
  products!: Product[]
  constructor(private productService:ProductService,private router:Router) { }
  
  ngOnInit(): void {
    this.products=this.productService.getProducts();  
  }
  deleteProduct(){
    this.productService.deleteProduct(this.product.id); 
    this.router.navigate(['../admin/product'])
  }

}
