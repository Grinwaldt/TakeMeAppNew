import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DomSanitizer} from '@angular/platform-browser';
import { TasksService } from '../../app/services/tasks.service';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,public  sanitizer:DomSanitizer,
    private tasksService: TasksService) {
  }

  
  
  

  ionViewDidLoad() {
    var vid = document.getElementById("myVideo"); 
    vid.addEventListener('ended', (event) => {
      console.log('Video stopped either because 1) it was over, ' +
          'or 2) no further data is available.');
    });

  }
 
}
