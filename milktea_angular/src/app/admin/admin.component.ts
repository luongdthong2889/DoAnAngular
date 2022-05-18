import { LoginService } from './../admin-login/admin-login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private router:Router,private adminLogin:LoginService) { }

  ngOnInit(): void {
  
  }
  backToClient(){
    this.router.navigate(['../product'])
  }
  logOut(){
    this.adminLogin.LogOut();
  }
}
