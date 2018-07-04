import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html'
})
export class TabPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {

  }

  ionViewDidLoad ()
  {
      console.log('ionViewDidLoad TabPage');
  }

  public onButtonClicked(): void {
    this.viewCtrl.dismiss();
  }

}