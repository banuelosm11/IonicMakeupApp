import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProductService} from '../../providers/productService';
import {LandingPage} from '../pages';
import { Camera, CameraOptions } from '@ionic-native/camera';

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
  providers: [Camera]
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

 base64Image: String = "http://www.pngmart.com/files/1/Lipstick-Kiss-PNG-Image.png";

  

  constructor(public navCtrl: NavController, public navParams: NavParams, private productService:ProductService,
  private camera:Camera) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProdPage');
  }

  takePicture(){

  const optionsForTaking: CameraOptions = {
  quality: 100,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE,
  targetWidth: 1000,
  targetHeight: 1000,
  }

this.camera.getPicture(optionsForTaking).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64:
 this.base64Image = 'data:image/jpeg;base64,' + imageData;
 console.log(imageData);
}, (err) => {
  alert("An error occurred: " + err);
 // Handle error
});

}

selectPicture(){
  const optionsForSelecting: CameraOptions = {
  destinationType: this.camera.DestinationType.FILE_URI,
  sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
}

this.camera.getPicture(optionsForSelecting).then(function (imageUri){
  this.base64Image = imageUri;
  console.log(imageUri);
}, (err) => {
  alert("An error occurred: " + err);
});
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
