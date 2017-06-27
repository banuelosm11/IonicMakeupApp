import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditProdPage } from '../pages';
import {ProductService} from '../../providers/productService';
/**
 * Generated class for the ProductDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {
  selectedProduct: any;
  productDetails: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private productService:ProductService) {
    this.selectedProduct = navParams.get('p');

    productService.getProductDetails(this.selectedProduct.id).subscribe(data => {
      this.productDetails = data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailsPage');
  }

  goEditProdPage(event, p:any){
   this.navCtrl.push(EditProdPage, {p});
  }

  removeItem(){
    this.productService.deleteProduct(this.selectedProduct.id).subscribe(data => {
      console.log(data);
    });
  }

}
