'use strict'

// Array destructuring

// let peole = ['Jack', 'Max', 'Leo'];
/*let p1 = peole[0];
let p2 = peole[1];
let p3 = peole[2];
*/
let [p1, p2, p3] = ['Jack', 'Max', 'Leo'];

console.log(p1, p2, p3);


const rate = [1, 50, 100, [1000, 2000]];

let [low, middle, high, [higher, sup]] = rate;

console.log(low, middle, high, higher, sup);


function calculate([a, b]) {
	return [a,b];
}

console.log(calculate.call(this, [1, 10]));

let [a, b] = calculate([2, 5]);

console.log([a, b]);


