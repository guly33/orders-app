import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_services/auth.guard';
import { OrderDetailGuard } from './_services/order-detail.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', canActivate: [AuthGuard],  loadChildren: './home/home.module#HomePageModule' },
  { path: 'log-in', loadChildren: './log-in/log-in.module#LogInPageModule' },
  { path: 'orders-list', canActivate: [AuthGuard], loadChildren: './orders-list/orders-list.module#OrdersListPageModule' },
  { path: 'order-details', canActivate: [OrderDetailGuard, AuthGuard], loadChildren: './order-details/order-details.module#OrderDetailsPageModule' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


