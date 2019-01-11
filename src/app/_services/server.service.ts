import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class ServerService {

  testUser = {
  	cradentials: {
  		username: 'gal33',
  		password: 'password'
  	},
  	info: {
  		id: '123abc',
  		name: 'gal peled',
  		mail: 'gal@peled.com',
  		address: 'over there 4, Haifa, Israel'
  	}
  };

  constructor( private http: HttpClient ) {

   }


   public getOrders(): Observable<any> {
     return this.http.get('/assets/data/orders.json');
   }


}
