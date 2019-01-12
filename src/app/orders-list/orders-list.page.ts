import { Component, OnDestroy, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { OrdersService } from '../_services/orders.service';
import { Order } from './order.model';
import { QrScannerService } from '../_services/qr-scanner.service';
import { BarcodeScanResult } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.page.html',
  styleUrls: ['./orders-list.page.scss'],
})
export class OrdersListPage implements OnDestroy {
  
  private subscription: Subscription;
  public orders = [];
  public searchVal: String;
  public orderToDisplay: Object;
  public encodedIdArr: [];
  @ViewChild('searchInput') searchInput;

  constructor( private ordersService: OrdersService,
             private router: Router,
             private scanner: QrScannerService) {

    this.subscription = this.ordersService.ordersArr.subscribe(
        (data) => {
          this.orders = data;
        });
  }

  onSearchOrders(event) {
    this.searchVal = event.target.value;
  }

  onScanQr() {
    this.scanner.scanCode().then((data: BarcodeScanResult) => {
      this.searchVal = data.text;
      this.searchInput.el.value = data.text;
    }).catch((err) => {
      console.log('err', err);
    });
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

//qr encoder
// onEncode() {
//   for (let i = 0; i < this.orders.length; ++i) {
//     // code...
//     const id = this.orders[i].order_id;
//     this.scanner.encodedText(id);
//   }
// }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}


