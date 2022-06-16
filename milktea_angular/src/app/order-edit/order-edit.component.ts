import { Component, OnInit } from '@angular/core';
import { Database } from '@angular/fire/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Order } from '../admin-order/order.model';
import { OrderService } from '../admin-order/order.service';
import { Cart } from '../cart/cart.model';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

  id!: number;
  index!: number;
  cart:Cart[];
  orders: Order[]
  orderForm!: FormGroup;
  editMode=false;
  constructor(public database:Database,private route:ActivatedRoute,private router:Router,private orderService:OrderService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.editMode=params['id']!=null;    
        this.initForm();
      }
    )
  }
  initForm(){
    let orderID;
    let userName='';
    let userPhone;
    let userAddress='';
    let userCity='';
    let userPayment='';
    // let productName='';
    // let productQuantity;
    // let productPrice;
    // let productTotalPrice;
    if(this.editMode){
      const order=this.orderService.getOrder(this.id);
      console.log(this.id);
      console.log(order);
      orderID=order.id;
      userName=order.user.name;
      userPhone=order.user.phone;
      userAddress=order.user.address;
      userCity=order.user.city;
      userPayment=order.user.payment;
      // productName=order.cart.product.name;
      // productQuantity = order.cart.quantity;
      // productPrice = order.cart.price;
      // productTotalPrice = order.totalPrice;
    }
    this.orderForm= new FormGroup({
      'id':new FormControl(orderID,[Validators.required,Validators.pattern(/^[0-9]+[0-9]*$/)]),
      'name': new FormControl(userName,Validators.required),
      'phone': new FormControl(userPhone,[Validators.required,Validators.pattern(/^((\\+91-?)|0)?[0-9]{10}$/)]),
      'address': new FormControl(userAddress,Validators.required),
      'city': new FormControl(userCity,Validators.required),
      'payment':new FormControl(userPayment,Validators.required)
    });
  }
  onSubmitOrder(){
    if(this.editMode){
      this.orderService.updateOrder(this.id,this.orderForm.value);
    }
  }
  onCancel(){
    this.router.navigate(['../admin/order'])
  }
}
