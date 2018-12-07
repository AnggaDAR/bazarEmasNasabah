import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AccountPage } from '../pages/account/account';
import { BookinglistPage } from '../pages/bookinglist/bookinglist';
import { CartPage } from '../pages/cart/cart';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { Home2Page } from '../pages/home2/home2';
import { UploadPage } from '../pages/upload/upload';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: "home" },

      { title: 'List', component: ListPage, icon: "list-box" },
      { title: 'Account', component: AccountPage, icon: "person" },
      { title: 'Booking List', component: BookinglistPage, icon: "list-box" },
      { title: 'Cart', component: CartPage, icon: "cart" },

      { title: 'Hello Ionic', component: HelloIonicPage, icon: 'grid'},
      { title: 'Home2', component: Home2Page, icon: 'grid'}

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
