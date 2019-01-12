import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {
  
  private login: FormGroup;
  public isValid: Boolean;

  constructor( private auth: AuthService, private router: Router ) {

   }

  ngOnInit() {
       this.login = new FormGroup({
          'username': new FormControl(null, Validators.required),
          'password': new FormControl(null, Validators.required)
       });
  }

  onSubmit() {
  	const toValidate = {
  		username: this.login.value.username,
  		password: this.login.value.password,
  	};
	  
    this.isValid = !this.auth.loging(toValidate);
    this.login.value.username = '';
	  this.login.value.password = '';
    this.router.navigate(['/home']);
  	
  }

}
