import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ServerService } from '../../_services/server.service';
import { Order } from '../order.model';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {
  
  @Input() order: Order;
  @Output() toOrderId = new EventEmitter<String>(); 

  constructor( private server: ServerService ) { }

  ngOnInit() {
  }

  onGetDetails(orderId) {
    this.toOrderId.emit(orderId);
  }

}
