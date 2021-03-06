import { Component, OnInit } from '@angular/core';
import { Order } from '../admin-order/order.model';
import { OrderService } from '../admin-order/order.service';
import { ProductService } from '../product-list/product.service';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private productService:ProductService, private orderService:OrderService) { }
  products!: Product[]
  orders!:Order[];
  tabOne:any;
  tabTwo:any;
  tabThree:any;
  tab2014:any;
  tab2015:any;
  tab2016:any;
  tab2017:any;
  tab2018:any;
  tab2019:any;
  ngOnInit(): void {
    this.products=this.productService.getProducts();
    this.orders=this.orderService.getOrders();
    this.tabOne='block';
  }
  tab1(){
    if(this.tabOne=='block')
    {
      this.tabOne='none';
    }
    else
    {
      this.tabOne='block';
    }
    this.tabTwo='none';
    this.tabThree='none';
  }
  tab2(){
    this.tabOne='none';
    if(this.tabTwo=='block')
    {
      this.tabTwo='none';
    }
    else
    {
      this.tabTwo='block';
    }
    this.tabThree='none';
  }
  tab3(){
    this.tabOne='none';
    this.tabTwo='none';
    if(this.tabThree=='block')
    {
      this.tabThree='none';
    }
    else
    {
      this.tabThree='block';
    }
  }
  tab14(){
    this.tab2015='none';
    this.tab2016='none';
    this.tab2017='none';
    this.tab2018='none';
    this.tab2019='none';
    if(this.tab2014=='block')
    {
      this.tab2014='none';
    }
    else
    {
      this.tab2014='block';
    }
  }
  tab15(){
    this.tab2014='none';
    this.tab2016='none';
    this.tab2017='none';
    this.tab2018='none';
    this.tab2019='none';
    if(this.tab2015=='block')
    {
      this.tab2015='none';
    }
    else
    {
      this.tab2015='block';
    }
  }
  tab16(){
    this.tab2014='none';
    this.tab2015='none';
    this.tab2017='none';
    this.tab2018='none';
    this.tab2019='none';
    if(this.tab2016=='block')
    {
      this.tab2016='none';
    }
    else
    {
      this.tab2016='block';
    }
  }
  tab17(){
    this.tab2014='none';
    this.tab2015='none';
    this.tab2016='none';
    this.tab2018='none';
    this.tab2019='none';
    if(this.tab2017=='block')
    {
      this.tab2017='none';
    }
    else
    {
      this.tab2017='block';
    }
  }
  tab18(){
    this.tab2014='none';
    this.tab2015='none';
    this.tab2016='none';
    this.tab2017='none';
    this.tab2019='none';
    if(this.tab2018=='block')
    {
      this.tab2018='none';
    }
    else
    {
      this.tab2018='block';
    }
  }
  tab19(){
    this.tab2014='none';
    this.tab2015='none';
    this.tab2016='none';
    this.tab2017='none';
    this.tab2018='none';
    if(this.tab2019=='block')
    {
      this.tab2019='none';
    }
    else
    {
      this.tab2019='block';
    }
  }

}
