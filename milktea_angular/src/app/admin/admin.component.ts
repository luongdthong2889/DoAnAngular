import { LoginService } from './../admin-login/admin-login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product/product.model';
import { ProductService } from '../product-list/product.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  products!: Product[];
  constructor(private productService:ProductService,private router:Router,private adminLogin:LoginService) { }

  ngOnInit(): void {
    this.products=this.productService.getProducts();
  }
  backToClient(){
    this.router.navigate(['../product'])
  }
  logOut(){
    this.adminLogin.LogOut();
  }
}
