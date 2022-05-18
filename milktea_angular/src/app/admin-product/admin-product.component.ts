import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product-list/product.service';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {

  products!: Product[];
  searchText: any;
  constructor(private productService:ProductService,private router:Router,private route:ActivatedRoute) {

   }

  ngOnInit(): void {
    this.products=this.productService.getProducts();   
  }
  onNewProduct(){
    this.router.navigate(['new'],{relativeTo:this.route});
  }
}
