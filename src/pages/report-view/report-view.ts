import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProductService} from '../../providers/productService';

/**
 * Generated class for the ReportViewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-report-view',
  templateUrl: 'report-view.html',
})
export class ReportViewPage {
  currentOrEmpty:any;
  timeframe:any;
  report:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private productService:ProductService) {
  
  this.currentOrEmpty = navParams.get('first');
  this.timeframe = navParams.get('second');

    this.productService.inventoryQuery(this.currentOrEmpty, this.timeframe)
    .subscribe(data => {
      this.report = data;
      console.log(this.report);
    });;

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportViewPage');
  }

}
