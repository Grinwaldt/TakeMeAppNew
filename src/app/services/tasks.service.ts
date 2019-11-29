import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable()
export class TasksService {
	tasks: Task[] = [{title:'ברכת המזון',count:1,count:2,freqency:'daily'}];

	const options =
   [{
      title: 'ברכת המזון' ,
      note: 'Take this challenge' ,
      icon: "../../assets/icon/tfila.svg",
	  id: 1,
	  count: 0
    },{
      title: 'לימוד תורה' ,
      note: 'Take this challenge' ,
      icon: "../../assets/icon/Tora.svg",
	  id: 2,
	  count : 0,
    },{
      title: 'הנחת תפילין' ,
        note: 'Take this challenge' ,
        icon: "../../assets/icon/tfilin.svg",
		id: 3,
		count : 0, 
    },{
      title: 'תפילה' ,
      note: 'Take this challenge' ,
      icon: "../../assets/icon/tfila.svg",
	  id: 4,
	  count: 0,
      }];
	constructor() {

	}

	addTask(task) {
		console.log("I do something useful!", task);
		let tempTask = this.options.filter(item => Item.id == task.id);
		tempTask.count++;
		this.tasks.push(tempTask);
	}
	getTasks(){
		return this.tasks;
	}

	editTask(id) {
		this.tasks.map(item => {
			if (item.id === id) {
				item.count++;
			}
			return item;
		}
		);


		
	}

}