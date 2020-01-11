'use strict'
// Classes

class Task {
	constructor(title = Task.getDefaultTitle(), isComplited = false) {
		this.title = title,
		this._isComplited = isComplited,
		Task.counter += 1
	}

	static getDefaultTitle() {
		return 'Title text';
	}

	completed() {
		isComplited = true;
	}

	get isComplited() {
		return this._isComplited === true ? 'task is completed' : 'task is not completed'
	}
}

// Создание статического свойства

Task.counter = 0;

let task = new Task('learn ES6', true);
let task2 = new Task('learn React js', false);


