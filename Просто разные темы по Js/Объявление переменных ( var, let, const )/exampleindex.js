'use strict'
// ---- Define
// ---- let - var
// ---- const -constant
// ---- var - deprecated

if(true) {
	var a = "ES5";
}
console.log(a);

if(true) {
	let a = 'ES6';
	const b = 'ES6'
	console.log(a);
	console.log(b);
}

// Scope
// ---- this example have hoisting
// var per = undefined;
console.log(per);
// per = 5;
var per = 5;
// ---- this example does not have hoisting
console.log(per_1);
let per_1 = 10;

// Example

var buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
	var button  = buttons[i];
	buttons.innerText = i;
	button.onClick = function() {
		console.log(i);
	};
};

// Const

const arr = [1, 2, 3, 4, 5];
console.log(arr);
// no error
arr.push(6); 
// no error 
const obj ={
	name: 'Oleg',
	age: 23
};
obj.age = 26;
