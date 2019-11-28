import { Injectable } from '@angular/core';
import {Task} from './models/task.ts';
@Injectable({
    providedIn: 'root'
})
export class TasksService {
	tasks :Task[]=[];
	constructor() {

	}

	addTask(task){
		console.log("I do something useful!",task);
		this.tasks.push(task);
	}

}