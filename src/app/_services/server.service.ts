import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class ServerService {

  testUser = {
  	cradentials: {
  		username: 'admin',
  		password: 'admin'
  	},
  	info: {
  		id: '123abc',
  		name: 'israel israeli',
  		mail: 'gal@peled.com',
  		address: 'over there 4, Haifa, Israel'
  	}
  };

  constructor( private http: HttpClient ) {
        this.getOrders().subscribe(data => {
            console.log(data);
        });
   }


   public getOrders(): Observable<any> {
     return this.http.get('/assets/data/orders.json');
   }


}
