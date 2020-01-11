'use strict'

// Symbols

let symbol = Symbol('mySymbol');

console.log(symbol);

let symbol2 = Symbol('mySymbol');
// false
console.log(symbol === symbol2);

let symbol = Symbol.for('mySymbol');

console.log(symbol);

let symbol2 = Symbol.for('mySymbol');
// true
console.log(symbol === symbol2);

// keyfor name of symbol

let symbolName = Symbol.keyFor(symbol);

let person = {
	name: 'Jack',
	age: 20,
	// [Symbol('password')]: 'Jack20'
	[Symbol.for('password')]: 'Jack20'
}

console.log(Object.getOwnPropertySymbols(obj));




