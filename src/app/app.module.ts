import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { MyApp } from './app.component';
import {HomePage, ListPage, LandingPage, InvReportPage, QueryInvPage, UserProfilePage, ProductDetailsPage, SignupPage, AddProdPage, EditProdPage, ReportViewPage} from '../pages/pages';
import {ProductService} from '../providers/productService';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'd8fbba85'
  }
};


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
    EditProdPage,
    ReportViewPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
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
    EditProdPage,
    ReportViewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductService,
    Camera,
    InAppBrowser
  ]
})
export class AppModule {}
