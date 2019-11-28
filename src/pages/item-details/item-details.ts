import { Component } from '@angular/core';
import {TasksService} from '../../app/services/tasks.service';
import { NavController, NavParams } from 'ionic-angular';
import { VideoPage } from '../video/video';
import { ReadingPage } from '../reading/reading';
import { Task } from '../../app/models/task';



@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;
  newTask :  Task = { id : 0,title : '', freqency :'', completedCounts : 0};
  constructor(public navCtrl: NavController, public navParams: NavParams,private tasksService : TasksService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }

  radioGroupChange(e){
    this.newTask.freqency = e;
 
  }
  addTask(selectedItem){

    this.newTask.title = selectedItem.title;
    this.newTask.id =selectedItem.id; 
    this.tasksService.addTask(this.newTask);

    if(this.newTask.id === 1 ){
      this.navCtrl.push(ReadingPage);
    }
    if(this.newTask.id === 2 ){
      this.navCtrl.push(VideoPage);
    }
  }

 
}



 
 













