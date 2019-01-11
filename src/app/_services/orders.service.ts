import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { Subscription, BehaviorSubject } from 'rxjs';
import { Order } from '../orders-list/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  ordersArr = new BehaviorSubject([Order]);
  toDisplay: Order;
  subscripton: Subscription;

  constructor(private server: ServerService ) { 
  	this.subscripton = this.server.getOrders().subscribe(data => {
          this.ordersArr.next(data);
      });
  }
}
