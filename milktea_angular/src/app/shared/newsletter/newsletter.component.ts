import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product-list/product.service';
import { Product } from 'src/app/product/product.model';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { Order } from 'src/app/admin-order/order.model';
import { OrderService } from 'src/app/admin-order/order.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: false } }
  ]
})
export class NewsletterComponent implements OnInit {
  emailText:string;
  products!: Product[];
  orders!:Order[];
  constructor(private productService:ProductService, private orderService:OrderService, private toastr:ToastrService) { }
  
  ngOnInit(): void {
    this.products=this.productService.getProducts();
    this.orders = this.orderService.getOrders(); 
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
  itemsPerSlide = 4;
  singleSlideOffset = true;
  noWrap = false;
 
  slides = [
    {image: '../../assets/images/288126127_721406219192550_1476487564732117250_n.jpg'},
    {image: '../../assets/images/280550220_1408123456325309_2446403017439718980_n.jpg'},
    {image: '../../assets/images/274904804_332654318800299_8675836930370984907_n.jpg'},
    {image: '../../assets/images/273572452_1299727537219729_1975826074699497503_n.jpg'},
    {image: '../../assets/images/271642936_131990115960274_5832989994316598062_n.jpg'},
    {image: '../../assets/images/269675354_453601592958286_4640331339943694322_n.jpg'},
    {image: '../../assets/images/259502433_452616839616401_6876642311611132974_n.jpg'},
    {image: '../../assets/images/158602927_206496171215290_849558396249531846_n.jpg'}
  ];
}
