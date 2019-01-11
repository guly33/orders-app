import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { OrdersService } from './orders.service';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailGuard implements CanActivate {
  
  constructor( private ordersService: OrdersService, private router: Router) {

  }	

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
	 			if (this.ordersService.toDisplay !== undefined) {
	 				// code...
	 				return true;
	 			}
	 			this.router.navigate(['/orders-list']);
	 			return false; 	
  }
}
