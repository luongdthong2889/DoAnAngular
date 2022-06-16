import { Injectable } from '@angular/core';
import { child, Database, get, ref } from '@angular/fire/database';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  order: Order[] = new Array();

  constructor(public database: Database) {
    this.getOderData();
  }

  getOderData() {
    const dbRef = ref(this.database);
    get(child(dbRef, `orders/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          snapshot.forEach((element) => {
            this.order.push(
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

  getOrder(){
    return this.order;
  }
}
