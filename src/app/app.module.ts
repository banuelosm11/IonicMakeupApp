import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import {HomePage, ListPage, LandingPage, InvReportPage, QueryInvPage, UserProfilePage, ProductDetailsPage, SignupPage, AddProdPage, EditProdPage} from '../pages/pages';
import {ProductService} from '../providers/productService';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LandingPage,
    InvReportPage,
    QueryInvPage,
    UserProfilePage,
    ProductDetailsPage,
    SignupPage,
    AddProdPage,
    EditProdPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LandingPage,
    InvReportPage,
    QueryInvPage,
    UserProfilePage,
    ProductDetailsPage,
    SignupPage,
    AddProdPage,
    EditProdPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductService
  ]
})
export class AppModule {}
