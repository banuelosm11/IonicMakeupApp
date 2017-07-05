import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ListPage, ProductDetailsPage, QueryInvPage, AddProdPage  } from '../pages'

/**
 * Generated class for the LandingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {
//this and aparams in constructors
  fullname:any;
  pic:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.fullname = navParams.get('first');
  this.pic = navParams.get('second');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }

  goToListPage(){
   this.navCtrl.push(ListPage);
  }

  goToAddProdPage(){
   this.navCtrl.push(AddProdPage);
  }

  goToQueryInv(){
   this.navCtrl.push(QueryInvPage);
  }

}
