import { Component } from '@angular/core';
import { IonicPage,  NavParams } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-tabholder',
  templateUrl: 'tabholder.html',
})
export class TabholderPage {
 
  tab1Root: any = 'Tab1Page';
  tab2Root: any = 'Tab2Page';
  myIndex: number;

  constructor(navParams: NavParams) {

    this.myIndex = navParams.data.tabIndex || 0;
  }

ionViewDidLoad ()
  {
      console.log('ionViewDidLoad TabholderPage');
  }

}
