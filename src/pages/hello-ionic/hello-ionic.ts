import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Home2Page} from '../home2/home2';
import { UploadPage } from '../upload/upload';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
  
})

export class HelloIonicPage {
  constructor(public navCtrl: NavController, public navParams: NavParams)  {
this.navCtrl = navCtrl;    

  }
  upload(){
    // alert("dont click");
    this.navCtrl.setRoot(UploadPage);
  }
}
