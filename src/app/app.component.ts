import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {HomePage, ListPage, LandingPage, InvReportPage, QueryInvPage, UserProfilePage, ProductDetailsPage, SignupPage, AddProdPage, EditProdPage} from '../pages/pages';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public menu: MenuController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: LandingPage },
      { title: 'My Profile', component: UserProfilePage },
      { title: 'Browse Collection', component: ListPage },
      { title: 'Inventory List', component: QueryInvPage },
      { title: 'Add Products', component: AddProdPage },
      { title: 'Sign out', component: 'Placeholder' }
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
    if (page.title == 'Sign out'){
      this.signout();
    }else{
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.menu.close();
    this.nav.setRoot(page.component);
    }
  }

  signout(){
    //signout and alert for signout
    this.menu.close();
    this.nav.setRoot(HomePage); 
  }
}
