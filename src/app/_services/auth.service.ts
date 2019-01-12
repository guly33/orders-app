import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

	isLogged = false;
	loggedObservable = new BehaviorSubject(false);

	constructor( private server: ServerService, private router: Router ) {}


	isAuthnticated() {
		const promise = new Promise(
				(resolve, reject) => {
					//server "delay" 
					setTimeout(() => {
						resolve(this.isLogged);
					}, 1000);
				}
			);
		return promise;
	}

	loging(currentUser): Boolean {
		const cradentials = this.server.testUser.cradentials;
		
		if (currentUser.username === cradentials.username && currentUser.password === cradentials.password) {
			// code...
			this.isLogged = true;
			this.loggedObservable.next(this.isLogged);
			console.log('success');
			return this.isLogged;
		}
		
		this.loggedObservable.next(this.isLogged);
		return this.isLogged;

	}

	logout() {
		this.isLogged = false;
		this.router.navigate(['/log-in']);
	}
}
