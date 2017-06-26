import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SignupPage, LandingPage } from '../pages'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToSignup(){
   this.navCtrl.push(SignupPage);
  }

  login(){
   this.navCtrl.setRoot(LandingPage);
  }

//"http://www.pngmart.com/files/1/Lipstick-Kiss-PNG-Image.png">
}
