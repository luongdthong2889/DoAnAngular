import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product-list/product.service';
import { Product } from 'src/app/product/product.model';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {
  emailText:string;
  products!: Product[]
  constructor(private productService:ProductService, private toastr:ToastrService) { }
  
  ngOnInit(): void {
    this.products=this.productService.getProducts();
  }
  onEmailChange()
  {
    console.log(this.emailText)
  }
  onCheckEmail(){
    if(this.emailText!=null){
      return true
    }
    else
    {
      return false
    }
  }
  onSubscribe(){
  
    if(this.emailText!=null)
    {
      this.emailText='';
      this.toastr.success('Thông tin sẽ sớm gửi đến bạn','Đăng Ký Thành Công');
    }
    else
    {
      
      this.toastr.error('Nhập email của bạn','Đăng Ký Thất Bại')
    }
  }
}
