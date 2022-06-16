import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../admin-order/order.model';
import { OrderService } from '../admin-order/order.service';

@Component({
  selector: 'app-search-order',
  templateUrl: './search-order.component.html',
  styleUrls: ['./search-order.component.css']
})
export class SearchOrderComponent implements OnInit {
  searchText!:string;
  @Output() searchChange= new EventEmitter<string>();
  orders: Order[];
  id: any;
  constructor(private orderService:OrderService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params =>{
      this.id = params.get('id');
      console.log(this.id);
    })
    this.orders = this.orderService.getOrder();
  }
  searchTextChange(){
    this.searchChange.emit(this.searchText);
  }
}
