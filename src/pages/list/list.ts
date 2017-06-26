import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ProductService} from '../../providers/productService';
import { ProductDetailsPage } from '../pages';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

export class ListPage {
  
  icons: string[];
  products: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private productService:ProductService) {

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane'];

    productService.getAllProducts().subscribe(data => {
      this.products = data;
    });

  }

  pTapped(event, p:any) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ProductDetailsPage, {p});
  }
 
}
