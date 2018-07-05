import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
 import { TabPage } from '../tab/tab';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage 
{
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
}

  public onButtonClicked(): void 
  {
    let modal = this.modalCtrl.create('TabPage');
    modal.present();
  }
  click(){
    this.navCtrl.push("TabPage");
  }
}
