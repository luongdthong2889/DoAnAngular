import { Injectable } from '@angular/core';
import { child, Database, get, ref } from '@angular/fire/database';
import { OrderFB } from './orderfb.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  orderfb: OrderFB[] = new Array();

  constructor(public database: Database) {
    this.getOderData();
  }

  getOderData() {
    const dbRef = ref(this.database);
    get(child(dbRef, `orders/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          snapshot.forEach((element) => {
            this.orderfb.push(
              new OrderFB(
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

  getOrderFB(){
    return this.orderfb;
  }
}
