import { ProductEditComponent } from './product-edit/product-edit.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CartComponent } from './cart/cart.component';

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductComponent } from "./product/product.component";
import { PaymentComponent } from './payment/payment.component';

const appRoutes:Routes=[
    {path:'',component:HomeComponent},
    {path:'product',component:ProductComponent},
    {path:'product/:id',component:ProductComponent},
    {path:'detail/:id',component:ProductDetailComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'cart',component:CartComponent},
    {path:'payment',component:PaymentComponent},
    {path:'login',component:AdminLoginComponent},
    {path:'admin',component:AdminComponent,children:[
        {path:'product',component:AdminProductComponent,children:[
            {path:'new',component:ProductEditComponent},
            {path:':id',component:ProductEditComponent}
        ]},    
    ]}
];
@NgModule({
    imports:[RouterModule.forRoot(appRoutes,{scrollPositionRestoration:'enabled'})],
    exports:[RouterModule]
})
export class AppRoutingModule{

}
