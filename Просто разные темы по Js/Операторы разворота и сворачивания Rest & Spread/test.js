'use strict'
// ----...Rest/...Spread


// Example 1
const num1 = [1, 2, 3, 4, 5];
const num2 = [6, 7, 8, 9, 10];
// const concatnum12 = num1 + ',' + num2;
// const result = [num1, num2];
// Array.prototype.push.apply(num1, num2);
console.log([...num1, ...num2]);

// Example 2

const A = {
	a: 'default',
	b: 'just_test'
};
const B = {
	a: 'value_from_b'
}

// ES5

const c = Object.assign(A, B); 
// а из объекта B перетирает а из A

// ES6
const c1 = {
	...A,
	...B
}
console.log(c1);


const arr = [1, 2, 3];
function sum(a, b, c) {
	return a + b + c;
}

function sum1(...rest) {
	return rest[0] + rest[1] + rest[2];
}


function sum2(arguments) {
	return arguments[0] + arguments[1] + arguments[2];
}

sum(arr[0], arr[1], arr[2]);
sum.apply(null, arr);
sum(...arr);


function rest(arg, ...rest) {
	console.log(rest);
}