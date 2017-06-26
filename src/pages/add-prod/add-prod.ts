import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProductService} from '../../providers/productService';
import {LandingPage} from '../pages';

/**
 * Generated class for the AddProdPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-prod',
  templateUrl: 'add-prod.html',
})
export class AddProdPage {

  brand:String;
  productName:String;
  color:String;
  price:number;
  category:String;
  repurchase:boolean;
  usedUp:boolean;
  purchaseDate:String;
  expirationDate:String;
  review:String;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private productService:ProductService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProdPage');
  }

  addProduct(){
    // let json = JSON.stringify({id: '12345'});

    var msgdata = {
                brand: this.brand,
                productName: this.productName,
                color: this.color,
                price: this.price,
                category: this.category,
                repurchase: this.repurchase,
                usedUp: this.usedUp,
                purchaseDate: this.purchaseDate,
                expirationDate: this.expirationDate,
                review: this.review
            };
            console.log(msgdata);
    this.productService.postProduct(msgdata)
    .subscribe(data => {
      console.log(data);
    });;
    this.navCtrl.push(LandingPage);
  }

}
