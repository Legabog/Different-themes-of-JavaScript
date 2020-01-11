'use strict'
// Objects

let name = 'Jack';
let sex = 'male';
let age = 20;
let firstName = 'firstName';
// ES5
let person = {
	name: name,
	sex: sex,
	age: age,
	greet: function() {
		console.log(`Hello ${this.name}`);
	}
};
// ES6
let person_v2 = {
	name,
	sex,
	age,
	greet() {
		console.log(`Hello ${this.name}`);
	},

	get password() {
		return this.name + this.age;
	}
};

let person_v3 = {
	[firstName]: 'Max'
};

Object.defineProperty(person, 'password', {
	get: function() {
		return this.name + this.age;
	}
})

console.log(person);
person.greet();
console.log(person_v2);
person_v2.greet();
