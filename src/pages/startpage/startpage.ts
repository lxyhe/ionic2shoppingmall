import { Component } from '@angular/core';
import { VideoPage } from '../videopage/videopage'
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-startpage',
  templateUrl: 'startpage.html'
})
export class StartPage {

  constructor(public navCtrl: NavController) {

  }
  goToHome(){
      this.navCtrl.setRoot(VideoPage );
  }
}
