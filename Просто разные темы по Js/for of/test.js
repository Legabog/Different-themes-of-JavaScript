'use strict'
// ES6 for...of

let names = ['Oleg', 'Max', 'Dima', 'Leha'];

for (let key in names) {
	// console.log(key);
	// C помощью for...in мы проходим по ключам итерируемого объекта
	// Чтобы вывести все значения можно применить такой приём:
	console.log(names[key]);
};

// Так же мы можем перебрать значения с помощью for...of

for (let values of names) {
	console.log(values);
};