import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-list/product.service';
import { Product } from '../product/product.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  _opened: boolean = false;
  products!: Product[]
  _toggleSidebar() {
    this._opened = !this._opened;
  }
  constructor(private productService:ProductService, public router:Router) { }
  
  ngOnInit(): void {
    this.products=this.productService.getProducts();
  }
  
}
