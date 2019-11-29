import { Injectable } from '@angular/core';
import { Task } from './models/task';
@Injectable()
export class TasksService {
	tasks: Task[] = [{title:'ברכת המזון',count:1,count:2,freqency:'daily'}];
	constructor() {

	}

	addTask(task) {
		console.log("I do something useful!", task);
		this.tasks.push(task);
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