import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
 
    this.items = [{
      title: 'ברכת המזון' ,
      note: 'Take this challenge' ,
      icon: "../../assets/icon/tfila.svg"
    },{
      title: 'לימוד תורה' ,
      note: 'Take this challenge' ,
      icon: "../../assets/icon/Tora.svg"
    },{
      title: 'הנחת תפילין' ,
        note: 'Take this challenge' ,
        icon: "../../assets/icon/tfilin.svg"
    },{
      title: 'תפילה' ,
      note: 'Take this challenge' ,
      icon: "../../assets/icon/tfila.svg"
      }];

    // for(let i = 1; i < 11; i++) {
    //   this.items.push({
    //     title: 'ברכת המזון' ,
    //     note: 'Take this challenge' ,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

}
