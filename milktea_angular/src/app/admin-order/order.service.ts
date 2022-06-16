import { Injectable } from '@angular/core';
import { child, Database, get, ref, set, remove } from '@angular/fire/database';
import { Order } from './order.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  orders: Order[] = new Array();

  constructor(public database: Database, private toastr: ToastrService) {
    this.getOderData();
  }

  getOderData() {
    const dbRef = ref(this.database);
    get(child(dbRef, `orders/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          snapshot.forEach((element) => {
            this.orders.push(
              new Order(
                element.val().id,
                element.val().cart,
                element.val().user,
                element.val().totalPrice,
              )
            );
          });
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getOrders(){
    return this.orders;
  }
  getOrder(index: number) {
    return this.orders.filter((x) => x.id == index)[0];
  }
  updateOrder(index: number, newOrder: Order) {
    console.log(index);
    this.orders[index] = newOrder;
    console.log(this.orders);
    set(ref(this.database, 'orders/' + newOrder.id), {
      id: newOrder.id,
      name: newOrder.user.name,
      phone: newOrder.user.phone,
      address: newOrder.user.address,
      city: newOrder.user.city,
      payment: newOrder.user.payment
    });
    this.toastr.success('Đã sửa thông tin đơn hàng','Thành Công');
  }
  deleteOrder(index: number) {
    for (let i = 0; i < this.orders.length; i++) {
      if (this.orders[i].id == index) {
        this.orders.splice(i, 1);
        break;
      }
    }
    remove(ref(this.database, 'orders/' + index));
    this.toastr.success('Đã xoá đơn hàng','Thành Công');
  }
}
