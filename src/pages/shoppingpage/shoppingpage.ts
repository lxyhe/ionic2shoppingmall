import { Component } from '@angular/core';
//import { VideoPage } from '../videopage/videopage'
import { NavController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-shoppingpage',
  templateUrl: 'shoppingpage.html'
})


export class ShoppingPage {
  public constraints = {
    audio: false,
    video: true
  };
  hasUserMedia() {
     //check if the browser supports the WebRTC
    return !!((<any>navigator).getUserMedia || (<any>navigator).webkitGetUserMedia || (<any>navigator).mozGetUserMedia);
  }

  constructor(public navCtrl: NavController, public view: ViewController) {
    //  this.step1();
    if (this.hasUserMedia()) {
       navigator.getUserMedia = (<any>navigator).getUserMedia || (<any>navigator).webkitGetUserMedia
          || (<any>navigator).mozGetUserMedia;

       //enabling video and audio channels
       navigator.getUserMedia({ video: true, audio: false }, (stream)=> {
          var video = document.querySelector('video');
          //inserting our stream to the video tag
          video.src = window.URL.createObjectURL(stream);
       },  (err)=> {

       });
    } else {
       alert("WebRTC is not supported");
    }

    //this.getvideo();
  }


}
