import { Component, OnInit } from '@angular/core';
import { ServerService } from '../_services/server.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

	currentUser: Object;

	constructor( private server: ServerService ) {}

	ngOnInit() {
		this.currentUser = this.server.testUser.info;
		console.log(this.currentUser);
	}
}
