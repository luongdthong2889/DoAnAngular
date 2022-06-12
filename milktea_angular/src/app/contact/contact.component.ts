import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-list/product.service';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private productService:ProductService, private toastr:ToastrService) { }
  products!: Product[]
  ngOnInit(): void {
    this.products=this.productService.getProducts();
  }
  onContact(){
    this.toastr.success('Tin nhắn của bạn đã được gửi','Thành Công')
  }
}
