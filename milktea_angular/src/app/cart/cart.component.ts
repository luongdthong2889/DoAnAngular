import { SubDetail } from './../product-detail/product-detail.component';
import { CartService } from './cart.service';
import { Cart } from './cart.model';
import { Product } from './../product/product.model';
import {
  Component,
  OnInit,
  Input,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './user.model';
import { PaymentService } from '../payment/payment.service';
import { Router } from '@angular/router';
import { ProductService } from '../product-list/product.service';
import { render } from 'creditcardpayments/creditCardPayments';
import {
  HttpInterceptor,
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';
import {
  Database,
  set,
  ref,
  update,
  onValue,
  get,
  child,
  list,
  remove,
} from '@angular/fire/database';
import { Order } from '../admin-order/order.model';
import { OrderService } from '../admin-order/order.service';

declare var paypal: any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart!: Cart[];
  totalPrice!: number;
  checkoutForm!: FormGroup;
  paymentForm!: FormGroup;
  products!: Product[];
  product!: Product;
  orders: Order[];
  order: Order;
  @ViewChild('PayPal', { static: true }) paypalElement: ElementRef;
  paidFor = false;

  constructor(
    public database: Database,
    private productService: ProductService,
    private orderService: OrderService,
    private cartService: CartService,
    private paymentService: PaymentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.typeSelect = 'PayPal';
    this.typeSelect = 'COD';
    this.payDisable = 'none';
    this.payDisable2 = 'none';
    this.onCheckCartLenght();
    this.onUpdateTotal();
    this.initForm();
    this.initForm1();
    this.products = this.productService.getProducts();
    this.orders = this.orderService.getOrders();
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: 'USD',
                  value: this.totalPrice,
                },
              },
            ],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((details, err) => {
            // Show a success message to the buyer
            console.log(
              'Capture result',
              details,
              JSON.stringify(details, null, 2)
            );
            var transaction = details.purchase_units[0].payments.captures[0];
            this.router.navigate(['../product']);
            setTimeout(() => {
              window.alert(
                'T??nh tr???ng giao d???ch: ' +
                  transaction.status +
                  '\n\nM?? giao d???ch: ' +
                  transaction.id +
                  '\n\nC???m ??n ' +
                  details.payer.name.given_name +
                  ' ???? mua h??ng!'
              );
            }, 500);
          });
        },
        onError: (err: any) => {
          console.log(err);
        },
        onShippingChange: (data, actions) => {
          //if not needed do nothing..
          return actions.resolve();
        },
      })
      .render(this.paypalElement.nativeElement);
    // render(
    //   {
    //     id: "#myPaypalButtons",
    //     currency: "USD",
    //     value: "100.00",
    //     onApprove: (details) => {
    //       alert("Thanh to??n th??nh c??ng");
    //     }
    //   }
    // )
  }
  private initForm() {
    let Username = '';
    let Userphone = '';
    let Useraddress = '';
    let Usercity = '';
    let UserPayment = '';
    this.checkoutForm = new FormGroup({
      name: new FormControl(Username, Validators.required),
      phone: new FormControl(Userphone, [
        Validators.required,
        Validators.pattern(/^((\\+91-?)|0)?[0-9]{10}$/),
      ]),
      address: new FormControl(Useraddress, Validators.required),
      city: new FormControl(Usercity, Validators.required),
      payment: new FormControl(UserPayment, Validators.required),
    });
  }
  private initForm1() {
    let cardName = 'L????ng ????nh Th??ng';
    let cardNumber = '097050560938';
    let securityCode = '289';
    let expirationDate = '09/22';
    this.paymentForm = new FormGroup({
      cardName: new FormControl(cardName, Validators.required),
      cardNumber: new FormControl(cardNumber, [
        Validators.required,
        Validators.pattern(/^((\\+91-?)|0)?[0-9]{12}$/),
      ]),
      securityCode: new FormControl(securityCode, [
        Validators.required,
        Validators.pattern(/^((\\+91-?)|0)?[0-9]{3}$/),
      ]),
      expirationDate: new FormControl(expirationDate, Validators.required),
    });
  }
  typesPay: SubDetail[] = [
    new SubDetail('COD'),
    new SubDetail('Th??? t??n d???ng/Th??? ghi n???'),
    new SubDetail('PayPal'),
  ];
  typeSelect!: string;
  payDisable: any;
  payDisable2: any;
  payDetail: any;
  showChange() {
    if (this.typeSelect == 'COD') {
      this.payDisable = 'none';
      this.payDisable2 = 'none';
      this.initForm1();
    } else if (this.typeSelect == 'PayPal') {
      this.payDisable = 'none';
      this.payDisable2 = 'block';
      this.payDetail = 'none';
      this.initForm1();
    } else {
      this.payDisable2 = 'none';
      this.payDisable = 'block';
      let cardName = '';
      let cardNumber = '';
      let securityCode = '';
      let expirationDate = '';
      this.paymentForm = new FormGroup({
        cardName: new FormControl(cardName, Validators.required),
        cardNumber: new FormControl(cardNumber, [
          Validators.required,
          Validators.pattern(/^((\\+91-?)|0)?[0-9]{12}$/),
        ]),
        securityCode: new FormControl(securityCode, [
          Validators.required,
          Validators.pattern(/^((\\+91-?)|0)?[0-9]{3}$/),
        ]),
        expirationDate: new FormControl(expirationDate, Validators.required),
      });
    }
  }
  CheckOut() {
    const cart = this.cart;
    const user = this.checkoutForm.value;
    this.paymentService.AddBill(user);

    var today = new Date();

    var date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();

    var time =
      today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

    var dateTime = date + ' ' + time;
    var id = Math.floor(Math.random() * 99999 + 1);
    set(ref(this.database, 'orders/' + id), {
      id: id,
      cart: cart,
      user: user,
      date:dateTime,
      totalPrice: this.totalPrice,
    });
    this.router.navigate(['../payment']);
  }
  onIncreaseQuantity(index: number) {
    this.cart[index].quantity += 1;
    this.cartService.updatePrice(index);
    this.onUpdateTotal();
  }
  onDecreaseQuantity(index: number) {
    if (this.cart[index].quantity > 1) {
      this.cart[index].quantity -= 1;
      this.cartService.updatePrice(index);
      this.onUpdateTotal();
    }
  }
  onDeleteCartItem(index: number) {
    console.log(this.cart[index].quantity);
    this.cart.splice(index, 1);
    this.onCheckCartLenght();
    this.onUpdateTotal();
  }
  onUpdateTotal() {
    this.totalPrice = 0;
    this.cart.forEach((i) => {
      this.totalPrice += i.price;
    });
  }
  onCheckCartLenght() {
    if (this.cart.length > 0) {
      this.payDetail = 'block';
    } else {
      this.payDetail = 'none';
    }
  }
}
