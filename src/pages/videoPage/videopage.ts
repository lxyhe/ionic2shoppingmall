import { Component } from '@angular/core';
import { LoginPage } from '../loginpage/loginpage';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-videopage',
  templateUrl: 'videopage.html'
})
export class VideoPage {

  constructor(public navCtrl: NavController) {

  }
  gologing(){
  this.navCtrl.push(LoginPage);

  }
}
