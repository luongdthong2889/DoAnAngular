import { SubDetail } from './../product-detail/product-detail.component';
import { CartService } from './cart.service';
import { Cart } from './cart.model';
import { Product } from './../product/product.model';
import { Component, OnInit, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './user.model';
import { PaymentService } from '../payment/payment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart!:Cart[];
  totalPrice!:number;
  checkoutForm!:FormGroup;
  paymentForm!:FormGroup;
  
  constructor(private cartService:CartService,private paymentService:PaymentService,private router:Router) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.typeSelect='COD';
    this.payDisable='none';
    this.onCheckCartLenght();
    this.onUpdateTotal();
    this.initForm();
    this.initForm1();
  }
  private initForm(){
    let Username='';
    let Userphone='';
    let Useraddress='';
    let Usercity='';
    let UserPayment='';
    this.checkoutForm= new FormGroup({
      'name': new FormControl(Username,Validators.required),
      'phone': new FormControl(Userphone,[Validators.required,Validators.pattern(/^((\\+91-?)|0)?[0-9]{10}$/)]),
      'address': new FormControl(Useraddress,Validators.required),
      'city': new FormControl(Usercity,Validators.required),
      'payment':new FormControl(UserPayment,Validators.required)
    })
  }
  private initForm1(){
    let cardName='Lương Đình Thông';
    let cardNumber='097050560938';
    let securityCode='289';
    let expirationDate='09/22';
    this.paymentForm= new FormGroup({
      'cardName': new FormControl(cardName,Validators.required),
      'cardNumber': new FormControl(cardNumber,[Validators.required,Validators.pattern(/^((\\+91-?)|0)?[0-9]{12}$/)]),
      'securityCode': new FormControl(securityCode,[Validators.required,Validators.pattern(/^((\\+91-?)|0)?[0-9]{3}$/)]),
      'expirationDate': new FormControl(expirationDate,Validators.required)
    })
  }
  typesPay:SubDetail[]=[
    new SubDetail('COD'),new SubDetail('Thẻ tín dụng/Thẻ ghi nợ')
  ]
  typeSelect!:string;
  payDisable:any;
  payDetail:any;
  showChange(){
    if(this.typeSelect=='COD')
    {
      this.payDisable='none';
      this.initForm1();
    }
    else{
      this.payDisable='block';
      let cardName='';
      let cardNumber='';
      let securityCode ='';
      let expirationDate='';
      this.paymentForm=new FormGroup({
        'cardName': new FormControl(cardName,Validators.required),
        'cardNumber': new FormControl(cardNumber,[Validators.required,Validators.pattern(/^((\\+91-?)|0)?[0-9]{12}$/)]),
        'securityCode': new FormControl(securityCode,[Validators.required,Validators.pattern(/^((\\+91-?)|0)?[0-9]{3}$/)]),
        'expirationDate': new FormControl(expirationDate,Validators.required)
      })
    }
  }
  CheckOut(){
    const cart=this.cart;
    const user=this.checkoutForm.value;
    this.paymentService.AddBill(user);
    this.router.navigate(['../payment'])
  }
  onIncreaseQuantity(index:number){
    this.cart[index].quantity+=1;
    this.cartService.updatePrice(index);
    this.onUpdateTotal();
  }
  onDecreaseQuantity(index:number){
    if(this.cart[index].quantity>1)
    {
      this.cart[index].quantity-=1;
      this.cartService.updatePrice(index);
      this.onUpdateTotal();
    }
  }
  onDeleteCartItem(index:number){
    console.log(this.cart[index].quantity);
    this.cart.splice(index,1);
    this.onCheckCartLenght();
    this.onUpdateTotal();
  }
  onUpdateTotal(){
    this.totalPrice=0;
    this.cart.forEach(i => {
      this.totalPrice+=i.price;
    });
  }
  onCheckCartLenght(){
    if(this.cart.length>0)
    {
      this.payDetail='block';
    }
    else{this.payDetail='none';}
  }
}
