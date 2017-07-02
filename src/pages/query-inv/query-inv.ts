import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReportViewPage } from '../pages';
import {ProductService} from '../../providers/productService';

/**
 * Generated class for the QueryInvPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-query-inv',
  templateUrl: 'query-inv.html',
})
export class QueryInvPage {
  currentOrEmpty: any;
  timeframe: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private productService:ProductService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QueryInvPage');
  }

    createReport(){
    this.navCtrl.push(ReportViewPage, {first: this.currentOrEmpty, second: this.timeframe});
  }

}


