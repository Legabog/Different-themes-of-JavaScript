'use strict'
// Стрелочные функции Arrow functions

// Example 1

/*function greet(name = 'Jack', age = 20) {
	// var name = name || 'Jack';
	return `Hello ${name}, your age is ${age}!`;
};

cnsole.log(greet('Max, 20'));*/

// Example 2
//  () => {}

const greet = (name, age) => `Hello ${name}, your age is ${age}!`

// 1) Using name:

let func = () => {};

// 2) Default syntax:
(a, b) => {
	let sum = a + b;
	return sum;
};

// 3) One argument:
(a) => {
	let reuslt = a + 1;
	return reuslt;
};

a => {
	let result = a + 1;
	return result;
};

// 4) No arguments:
() => {
	let result = a + b;
	return result;
};

// 5) If one line, don't need `return`:
a => a*2;
(a, b) => a*b;

// 6) Object literal:
() => ({ a : 2 });

// 7) IIFE:
(()=> {null})();

// Example 3 - context

let person = {
	userName: 'Jack',
	greet: function() {
		// let _this = this;
		// window.setTimeout(function() {
		//  console.log(_this.userName, _this);
		//  }, 1000);

		setTimeout(() => console.log(this.userName, this), 1000);
	},

	greet_v2() {
		console.log(this.userName, this);
	}
}

person.greet();