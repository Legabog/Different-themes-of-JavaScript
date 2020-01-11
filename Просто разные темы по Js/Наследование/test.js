'use strict'
// Inheritance

class Task {
	constructor(title = '') {
		this.title = title,
		this.isCompleted = false
	}

	completed() {
		this.isCompleted = true;
	}

}

class SubTask extends Task {
	constructor(title) {
		super(title); 
	}
	completed() {
		// this.isCompleted = true;
		super.completed();
		console.log(`task ${this.title} is completed!`); 
	}

}

let task = new Task('Learn ReactJS');
let subtask = new SubTask('Learn ES6');

task.completed();
subtask.completed();

console.log(task, subtask);


// Class declaration

class Task {};

// Class Expression

let Task = class Task {};
