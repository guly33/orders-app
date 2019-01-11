import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../_services/orders.service';
import { Order, Product } from '../orders-list/order.model';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {
  currentOrder: Order;
  products: Array<Product>;

  constructor( private ordersService: OrdersService) { 
  	this.currentOrder = this.ordersService.toDisplay;
  	console.log(this.currentOrder.products);
  	this.products = this.currentOrder.products;
  }

  ngOnInit() {
  }

}
