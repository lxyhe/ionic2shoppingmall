import { NgModule, ErrorHandler } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/loginpage/loginpage';
import { ModalPage } from '../pages/modalpage/modalpage';
import { StartPage } from '../pages/startpage/startpage';
import { VideoPage } from '../pages/videopage/videopage';
import { ShoppingPage } from '../pages/shoppingpage/shoppingpage';
import { PhoneRTC } from '../pages/phonertc/phonertc';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    ModalPage,
    StartPage,
    VideoPage,
    ShoppingPage,
    PhoneRTC
  ],
  imports: [
      IonicModule.forRoot(MyApp,{
        tabsHideOnSubPages: true,
        platforms: {
          ios: {
            backButtonText: "返回"
          }
        }
      })
    ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    ModalPage,
    StartPage,
    VideoPage,
    ShoppingPage,
    PhoneRTC
  ],
  providers: [Storage,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {

}
