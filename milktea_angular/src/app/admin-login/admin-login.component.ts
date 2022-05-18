import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoginService } from './admin-login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  @ViewChild('name') name:ElementRef;
  @ViewChild('password') password:ElementRef;

  constructor(private loginService:LoginService) { }

  ngOnInit():void{
   this.loginService.CheckLogin();
  }
  LoginAdmin(){
     this.loginService.Login(this.name.nativeElement.value,this.password.nativeElement.value);
  }
}
