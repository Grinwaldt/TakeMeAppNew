import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TasksService} from '../../app/services/tasks.service';
import { ListPage } from '../list/list';

// import {file} from '../../assets/documents/prayer.pdf'
/**
 * Generated class for the ReadingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reading',
  templateUrl: 'reading.html',
})
export class ReadingPage {
image:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private tasksService : TasksService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReadingPage');
  
  }
  
  completed(){

    this.tasksService.editTask(1);

    this.navCtrl.push(ListPage);


    }
  }

