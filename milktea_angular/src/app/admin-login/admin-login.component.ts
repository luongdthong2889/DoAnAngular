import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product-list/product.service';
import { Product } from '../product/product.model';
import { LoginService } from './admin-login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  @ViewChild('name') name:ElementRef;
  @ViewChild('password') password:ElementRef;
  products!: Product[]

  constructor(private productService:ProductService, private loginService:LoginService) { }
  
  ngOnInit():void{
   this.products=this.productService.getProducts();
   this.loginService.CheckLogin();
  }
  LoginAdmin(){
     this.loginService.Login(this.name.nativeElement.value,this.password.nativeElement.value);
  }
}
