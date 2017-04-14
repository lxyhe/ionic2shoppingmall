import { Component,ViewChild  } from '@angular/core';
import { Content } from 'ionic-angular';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  scrolledDistance:number = 0;
  @ViewChild(Content) contentNew: Content;
  public list_item: Array<any> = [
    {titleImg:'assets/img/1.jpg', username:'思雨',watch:'19986',address:'石家庄市'},
    {titleImg:'assets/img/2.jpg', username:'思雨1',watch:'8986',address:'北京市'},
    {titleImg:'assets/img/3.jpg', username:'思雨2',watch:'1986',address:'邢台市'},
    {titleImg:'assets/img/4.jpg', username:'思雨3',watch:'19986',address:'太原市'},
    {titleImg:'assets/img/5.jpg', username:'思雨4',watch:'2986',address:'苏州市'},
    {titleImg:'assets/img/6.jpg', username:'思雨5',watch:'6986',address:'杭州市'},
    {titleImg:'assets/img/7.jpg', username:'思雨7',watch:'4986',address:'深圳市'},
    {titleImg:'assets/img/8.jpg', username:'思雨8',watch:'99186',address:'天津市'},
    {titleImg:'assets/img/9.jpg', username:'思雨9',watch:'59861',address:'长春市'},
    {titleImg:'assets/img/10.jpg', username:'思雨10',watch:'9986',address:'吕梁市'},
  ];
  constructor(
    public navCtrl: NavController){



    }
    ngAfterViewInit(){
      this.contentNew.getScrollElement().addEventListener('scroll',(event)=>{
        console.log("爷爷滚动了")

      })
    }

}
