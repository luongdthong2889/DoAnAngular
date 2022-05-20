import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn:'root',
})
export class LoginService{
    constructor(private router:Router){}
    logged=false;

    Login(name:string,password:string){
        if(name=='admin' && password=='admin' ){
            this.router.navigate(['../admin/product'])
            this.logged=true;
          }
    }
    LogOut(){
      this.logged=false;
      this.router.navigate(['../']);
    }
    CheckLogin(){
      if(this.logged){
          this.router.navigate(['../admin']);
      }else{
        this.router.navigate(['../login']);
      }
     
    }
}