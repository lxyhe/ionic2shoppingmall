import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { ModalPage } from '../modalpage/modalpage';

import {TabsPage  } from '../tabs/tabs';
@Component({
  selector: 'page-login',
  templateUrl: 'loginpage.html'
})
export class LoginPage {
  public phone;
  public password;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
  Popover() {
    let modal = this.modalCtrl.create(ModalPage);
    modal.present();
  }
  login() {
    if (this.phone == "admin" && this.password == "123456") {
      this.navCtrl.push(TabsPage);

    }
  }
}
