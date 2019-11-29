import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TasksService} from '../../app/services/tasks.service';
import {Task} from './my-tasks.module'
/**
 * Generated class for the MyTasksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-tasks',
  templateUrl: 'my-tasks.html',
})
export class MyTasksPage {
tasks:Task[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private tasksService : TasksService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTasksPage');
  // this.tasks= this.tasksService.getTasks();
  }


}
