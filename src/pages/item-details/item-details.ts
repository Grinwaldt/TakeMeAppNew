import { Component } from '@angular/core';
import {TasksService} from '../../app/services/tasks.service.ts';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;
newTask :  Task = { id :'',title : '', freqency :''};
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
  }
}



 
 













