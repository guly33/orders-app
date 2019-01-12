import { Component, OnInit, OnDestroy } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './_services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {


  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Orders List',
      url: '/orders-list',
      icon: 'list'
    },
  ];

  public displaySideBar: Boolean = false;
  public loggedObserve: Subscription;
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.loggedObserve = this.auth.loggedObservable
          .subscribe(
              (logged: Boolean) => {
                this.displaySideBar = logged;
              }
            );
  }

  onLogout() {
    this.auth.logout();
    console.log('logout');
  }

  ngOnDestroy() {
    this.loggedObserve.unsubscribe();
  }

}

