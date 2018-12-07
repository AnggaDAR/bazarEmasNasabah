import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AccountPage } from '../pages/account/account';
import { BookinglistPage } from '../pages/bookinglist/bookinglist';
import { CartPage } from '../pages/cart/cart';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { Home2Page } from '../pages/home2/home2';
import { UploadPage } from '../pages/upload/upload';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AccountPage,
    BookinglistPage,
    CartPage,
    HelloIonicPage,
    Home2Page,
    UploadPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AccountPage,
    BookinglistPage,
    CartPage,
    HelloIonicPage,
    Home2Page,
    UploadPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
