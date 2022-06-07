import { LoginService } from './admin-login/admin-login.service';
import { PaymentService } from './payment/payment.service';
import { CartService } from './cart/cart.service';
import { ProductService } from './product-list/product.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatRadioModule} from '@angular/material/radio';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NewsletterComponent } from './shared/newsletter/newsletter.component';
import { CartComponent } from './cart/cart.component';
import { ToastrModule } from 'ngx-toastr';
import { PaymentComponent } from './payment/payment.component';
import { AdminComponent } from './admin/admin.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CommonModule } from '@angular/common';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminProductItemComponent } from './admin-product-item/admin-product-item.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { SidebarModule } from 'ng-sidebar';
import { NgxPaginationModule } from 'ngx-pagination';
import { CarouselModule } from 'ngx-bootstrap/carousel';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    ProductListComponent,
    ProductItemComponent,
    SearchProductComponent,
    HomeComponent,
    ProductDetailComponent,
    AboutComponent,
    ContactComponent,
    NewsletterComponent,
    CartComponent,
    PaymentComponent,
    AdminComponent,
    AdminLoginComponent,
    AdminProductComponent,
    AdminProductItemComponent,
    ProductEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatRadioModule,
    SidebarModule.forRoot(),
    ToastrModule.forRoot({
      timeOut:2000,
      positionClass:'toast-bottom-left'
    }),
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    CommonModule,
    NgxPaginationModule,
    CarouselModule 
  ],
  providers: [ProductService,CartService,PaymentService,LoginService],
  bootstrap: [AppComponent,HeaderComponent]
})
export class AppModule { }
