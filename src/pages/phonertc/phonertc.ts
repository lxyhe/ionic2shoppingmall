import { LocalNotifications } from 'ionic-native';
import { Component } from '@angular/core';
import { Camera } from 'ionic-native';
import { Geolocation } from 'ionic-native';
import { AlertController, Platform} from 'ionic-angular';
import * as moment from 'moment';
//import { ImagePicker } from 'ionic-native';
//declare var phonertc:any;
declare var cordova: any;
@Component({
  selector: 'page-phonertcpage',
  templateUrl: 'phonertc.html'
})

export class PhoneRTC {
  public photo: any;
  notifyTime: any;
  notifications: any[] = [];
  days: any[];
  chosenHours: number;
  chosenMinutes: number;
  constructor(public alertCtrl: AlertController, public platform: Platform) {

    this.notifyTime = moment(new Date()).format();
    this.chosenHours = new Date().getHours();
    this.chosenMinutes = new Date().getMinutes();
    this.days = [
      { title: 'Monday', dayCode: 1, checked: false },
      { title: 'Tuesday', dayCode: 2, checked: false },
      { title: 'Wednesday', dayCode: 3, checked: false },
      { title: 'Thursday', dayCode: 4, checked: false },
      { title: 'Friday', dayCode: 5, checked: false },
      { title: 'Saturday', dayCode: 6, checked: false },
      { title: 'Sunday', dayCode: 0, checked: false }
    ];

    (<any>navigator).getUserMedia = (<any>navigator).getUserMedia ||
      (<any>navigator).webkitGetUserMedia || (<any>navigator).mozGetUserMedia;

    var constraints = {
      audio: false,
      video: true
    };


    function successCallback(stream) {

      var video = document.querySelector('video');
      //inserting our stream to the video tag
      video.src = window.URL.createObjectURL(stream);
    }
    function errorCallback(error) {
      console.log('navigator.getUserMedia error: ', error);
    }
    (<any>navigator).getUserMedia(constraints, successCallback, errorCallback);

  }
  timeChange(time) {
    this.chosenHours = time.hour.value;
    this.chosenMinutes = time.minute.value;
  }
  // getImage() {
  //   console.log("你好");
  //   var a = ImagePicker.hasReadPermission();
  //   if (a) {
  //     ImagePicker.getPictures({
  //       maximumImagesCount: 1,
  //       width: 300,
  //       height: 300,
  //       quality: 100,
  //     }).then((results) => {
  //       this.photo = results;
  //     }, (err) => {
  //       console.log("图片提取失败")
  //     });
  //   }
  //  }
  addNotifications() {

    let currentDate = new Date();
    let currentDay = currentDate.getDay(); // Sunday = 0, Monday = 1, etc.

    for (let day of this.days) {

      if (day.checked) {

        let firstNotificationTime = new Date();
        let dayDifference = day.dayCode - currentDay;

        if (dayDifference < 0) {
          dayDifference = dayDifference + 7; // for cases where the day is in the following week
        }

        firstNotificationTime.setHours(firstNotificationTime.getHours() + (24 * (dayDifference)));
        firstNotificationTime.setHours(this.chosenHours);
        firstNotificationTime.setMinutes(this.chosenMinutes);

        let notification = {
          id: day.dayCode,
          title: 'Hey!',
          text: 'You just got notified :)',
          at: firstNotificationTime,
          every: 'week'
        };

        this.notifications.push(notification);

      }

    }

    console.log("Notifications to be scheduled: ", this.notifications);

    if (this.platform.is('cordova')) {

      // Cancel any existing notifications
      LocalNotifications.cancelAll().then(() => {

        // Schedule the new notifications
        LocalNotifications.schedule(this.notifications);

        this.notifications = [];

        let alert = this.alertCtrl.create({
          title: 'Notifications set',
          buttons: ['Ok']
        });

        alert.present();

      });

    }

  }
  getlocation() {
    Geolocation.getCurrentPosition().then((resp) => {
      let alert = this.alertCtrl.create({
        title: '您的地址',
        subTitle: '这是您的地址经纬度' + resp.coords.latitude + '纬度' + resp.coords.longitude,
        buttons: ['OK']
      });
      alert.present();
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
  camera() {
    Camera.getPicture({
      saveToPhotoAlbum: true,
      targetWidth: 300,
      targetHeight: 300,
      cameraDirection: 0,
      mediaType: 0,
      encodingType: 0,
      quality: 100,
    }).then((imageData) => {
      console.log(imageData);
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log(base64Image);
    }, (err) => {
      console.log(err);
    });
  }
  cancelAll() {

    LocalNotifications.cancelAll();

    let alert = this.alertCtrl.create({
      title: 'Notifications cancelled',
      buttons: ['Ok']
    });

    alert.present();

  }
  // ngOnInit() {
  //   LocalNotifications.schedule({
  //     id: 1,
  //     text: 'Single ILocalNotification',
  //     sound: 'RES:/ / platform_default',
  //     data: null,
  //     badge: 1,
  //     led: 'FFFFFF',
  //   })
  // }
}
