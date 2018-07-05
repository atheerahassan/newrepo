import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Nav } from 'ionic-angular';

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()

@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html'
})
export class TabPage {

  rootPage = 'TabholderPage';

  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    { title: 'Tab 1', pageName: 'TabholderPage', tabComponent: 'Tab1Page', index: 0, icon: 'home' },
    { title: 'Tab 2', pageName: 'TabholderPage', tabComponent: 'Tab2Page', index: 1, icon: 'media' }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {

  }

  openPage(page: PageInterface) {

  }

  isActive(page: PageInterface) {

  }

  // ionViewDidLoad ()
  // {
  //     console.log('ionViewDidLoad TabPage');
  // }

  // public onButtonClicked(): void {
  //   this.viewCtrl.dismiss();
  // }

}