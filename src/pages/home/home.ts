import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Auth, User } from '@ionic/cloud-angular';

import { SignupPage, LandingPage } from '../pages'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  

  constructor(public navCtrl: NavController, public auth: Auth, public user: User) {


  
  }

  goToSignup(){
   this.navCtrl.push(SignupPage);
  }

  login(){
  this.auth.login('instagram').then((success)=>{
    alert("loggeed in");
    const full_name = this.user.social.instagram.data.full_name;
    const profile_picture = this.user.social.instagram.data.profile_picture;
    alert(JSON.stringify(success));
    this.navCtrl.setRoot(LandingPage, {first: full_name, second: profile_picture});
  });
  }

  logout(){
    this.auth.logout();
    alert("logged out");
   //this.navCtrl.setRoot(HomePage);
  }

//"http://www.pngmart.com/files/1/Lipstick-Kiss-PNG-Image.png">
}
