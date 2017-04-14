import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { VideoPage } from '../pages/videopage/videopage'
import { TabsPage } from '../pages/tabs/tabs';
import { StartPage } from '../pages/startpage/startpage';
import { Storage } from '@ionic/storage';
import { PhoneRTC } from '../pages/phonertc/phonertc';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any

  constructor(platform: Platform, public storage: Storage) {
    this.storage.get('firstIn').then((result) => {
      console.log(result);
      if (result === true) {
        this.rootPage = PhoneRTC;
      }
      else {
        this.storage.set('firstIn', true);
        this.rootPage = TabsPage;
      }

    }
    );

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
