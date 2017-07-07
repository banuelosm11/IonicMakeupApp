import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private productService:ProductService, private alertCtrl:AlertController) {
    this.selectedProduct = navParams.get('p');

    productService.getProductDetails(this.selectedProduct.id).subscribe(data => {
      this.productDetails = data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProdPage');
  }

  onSubmit(event, p:any){
            console.log(this.selectedProduct);
    this.productService.putProductEdits(this.selectedProduct)
    .subscribe(data => {
      console.log(data);
    });;
    this.navCtrl.push(ProductDetailsPage, {p});
  }
 
}
