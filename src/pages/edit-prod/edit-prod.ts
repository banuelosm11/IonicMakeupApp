import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProductService} from '../../providers/productService';
import {ProductDetailsPage} from '../pages';

/**
 * Generated class for the EditProdPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-edit-prod',
  templateUrl: 'edit-prod.html',
})
export class EditProdPage {
  selectedProduct:any;
  productDetails:any;

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
    this.selectedProduct = navParams.get('p');

    productService.getProductDetails(this.selectedProduct.id).subscribe(data => {
      this.productDetails = data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProdPage');
  }

  onSubmit(event, p:any){
    // let json = JSON.stringify({id: '12345'});

    var msgdata = {
                id : this.selectedProduct.id,
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
    this.productService.putProductEdits(msgdata)
    .subscribe(data => {
      console.log(data);
    });;
    this.navCtrl.push(ProductDetailsPage, {p});
  }

}
