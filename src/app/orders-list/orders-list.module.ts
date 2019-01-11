import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrdersListPage } from './orders-list.page';
import { SearchPipe } from '../_pipe/search.pipe';
import { OrderItemComponent } from './order-item/order-item.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrdersListPage, SearchPipe, OrderItemComponent]
})
export class OrdersListPageModule {}
