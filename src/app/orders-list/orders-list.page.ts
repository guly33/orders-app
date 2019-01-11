import { Component } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { OrdersService } from '../_services/orders.service';
import { Order } from './order.model';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.page.html',
  styleUrls: ['./orders-list.page.scss'],
})
export class OrdersListPage {
  
  subscription: Subscription;
  public orders = [];
  public searchVal: String;
  public orderToDisplay: Object;

  constructor( private ordersService: OrdersService, private router: Router) {

    this.subscription = this.ordersService.ordersArr.subscribe(
        (data) => {
          this.orders = data;
        });
  }

  onSearchOrders(event) {
    this.searchVal = event.target.value;
  }

  getOrderDetails(id) {
    const arr = this.orders.filter((order) => {
      return (order.order_id === id);
    });
    if (arr.length > 0) {
      // code...
      this.ordersService.toDisplay = arr[0];
      this.router.navigate(['/order-details'])
    }
  }

}


