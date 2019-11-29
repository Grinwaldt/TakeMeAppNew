import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DomSanitizer} from '@angular/platform-browser';
import { TasksService } from '../../app/services/tasks.service';
import { ListPage } from '../list/list';

/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {
  showMessage : boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,public  sanitizer:DomSanitizer,
    private tasksService: TasksService) {
  }

  
  
  goToCAtegories(){
    this.navCtrl.push(ListPage);
}
  ionViewDidLoad() {
    this.tasksService.addTask({id : 2 , title : "לימוד תורה" , count : 0 , freqency : ""});
    var vid = document.getElementById("myVideo"); 
    vid.addEventListener('ended', (event) => {
      this.showMessage = true; 
      console.log('Video stopped either because 1) it was over, ' +
          'or 2) no further data is available.');
    });

  }
 
}
