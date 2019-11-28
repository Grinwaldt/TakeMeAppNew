import { Component } from '@angular/core';
import {Task} from '../../models/task.ts';
// /home/yehudit/devel/TakeMeAppNew/src/app/services/tasks.service.ts
import {TasksService} from '../../app/services/tasks.service.ts';
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  newTask :Task= {};

  constructor(private tasksService : TasksService) {
    
  }

  radioGroupChange(e){
    this.newTask.title = "fdsfds";
    this.newTask.id =5; 
    this.newTask.freqency = e;
 
  }
  addTask(){
    this.tasksService.addTask(this.newTask);
  }
}
