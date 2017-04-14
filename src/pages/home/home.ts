import { Component ,ViewChild } from '@angular/core';

import { NavController ,Slides} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('mySlider') slider: Slides;
  @ViewChild('mySlider1') slider1: Slides;
  mySlideOptions = {
    autoplay: 2000,
    initialSlide: 0,
    pager: true,
    loop: true,
    speed: 300,
  };
  mySlideOptions1={
    autoplay: 2000,
    initialSlide: 0,
    pager: true,
    loop: true,
    direction:'vertical',
    speed: 300
  }
  public  timer;
  public d;
  public h;
  public m;
  public s;
  constructor(public navCtrl: NavController) {

  }
  ngOnInit(){
    setInterval(()=>{
      this.slider.slideNext(300,true);
    },2000);
    this.Countdown()
  }
  Countdown(){
    var finshintimer=new Date(2017, 2, 8, 9, 0, 0).getTime()
    var nowtimer=new Date().getTime();
    this.timer=finshintimer-nowtimer;
    if(this.timer>=0){
      this.d=Math.floor(this.timer/1000/60/60/24);
      this.h=Math.floor(this.timer/1000/60/60%24);
      this.m=Math.floor(this.timer/1000/60%60);
      this.s=Math.floor(this.timer/1000%60);
      setInterval(()=>{
        this.Countdown()
      },0);
    }





  }

}
