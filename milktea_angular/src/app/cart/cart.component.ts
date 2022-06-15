import { SubDetail } from './../product-detail/product-detail.component';
import { CartService } from './cart.service';
import { Cart } from './cart.model';
import { Product } from './../product/product.model';
import { Component, OnInit, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './user.model';
import { PaymentService } from '../payment/payment.service';
import { Router } from '@angular/router';
import { ProductService } from '../product-list/product.service';
import { render } from 'creditcardpayments/creditCardPayments';
import { HttpInterceptor, HttpClient, HttpErrorResponse } from '@angular/common/http';

declare var paypal: any;

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
  products!: Product[];
  product!: Product;
  @ViewChild('PayPal', {static: true}) paypalElement: ElementRef;
  paidFor = false;
  
  constructor(private productService:ProductService, private cartService:CartService,private paymentService:PaymentService,private router:Router) { }
  
  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.typeSelect='PayPal';
    this.typeSelect='COD';
    this.payDisable='none';
    this.payDisable2='none';
    this.onCheckCartLenght();
    this.onUpdateTotal();
    this.initForm();
    this.initForm1();
    this.products=this.productService.getProducts();
    paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: "Text",
              amount: {
                currency_code: 'USD',
                value: "100.00"
              } 
            }
          ]
        })
        },
        onApprove: (data, actions) => {
            return actions.order.capture().then((details,err) => {
                // Show a success message to the buyer
                console.log('Capture result', details, JSON.stringify(details, null, 2));
                    var transaction = details.purchase_units[0].payments.captures[0];
                    this.router.navigate(['../product'])
              setTimeout(() => {
                window.alert('Tình trạng giao dịch: ' + transaction.status +
                '\n\nMã giao dịch: ' + transaction.id  + 
                '\n\nCảm ơn ' + details.payer.name.given_name + ' đã mua hàng!');;
                },500);
            });
        },
        onError: (err: any) => {
          console.log(err);
        },
        onShippingChange: (data,actions) => {
          //if not needed do nothing..
          return actions.resolve();
        }
    }).render(this.paypalElement.nativeElement);
    // render(
    //   {
    //     id: "#myPaypalButtons",
    //     currency: "USD",
    //     value: "100.00",
    //     onApprove: (details) => {
    //       alert("Thanh toán thành công");
    //     }
    //   }
    // )

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
    new SubDetail('COD'),new SubDetail('Thẻ tín dụng/Thẻ ghi nợ'), new SubDetail('PayPal')
  ]
  typeSelect!:string;
  payDisable:any;
  payDisable2: any;
  payDetail:any;
  showChange(){
    if(this.typeSelect=='COD')
    {
      this.payDisable='none';
      this.payDisable2='none';
      this.initForm1();
    }
    else if(this.typeSelect=='PayPal')
    {
      this.payDisable='none';
      this.payDisable2='block';
      this.payDetail='none';
      this.initForm1();
    }
    else{
      this.payDisable2='none';
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
