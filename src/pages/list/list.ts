import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: Array<{title: string, note: string, icon: string, id : number}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
 
    this.items = [{
      title: 'ברכת המזון' ,
      note: 'Take this challenge' ,
      icon: "../../assets/icon/tfila.svg",
      id: 1,
    },{
      title: 'לימוד תורה' ,
      note: 'Take this challenge' ,
      icon: "../../assets/icon/Tora.svg",
      id: 2
    },{
      title: 'הנחת תפילין' ,
        note: 'Take this challenge' ,
        icon: "../../assets/icon/tfilin.svg",
        id: 3,
    },{
      title: 'תפילה' ,
      note: 'Take this challenge' ,
      icon: "../../assets/icon/tfila.svg",
      id: 4
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
