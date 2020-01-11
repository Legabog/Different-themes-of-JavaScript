'use strict'
// this, call, apply шаблоны вызова функции
// 1. Шаблон вызова методов
let obj = {
	a: 777,
	method: function () {
		console.log(this.a);
	}
};

// 2. Шаблон вызова конструктора

function cons() {
	this.p = 777;
	console.log( this.p );
}

// -----------------------------------
function func() {
	console.log( this );
}

// ------------------------------------

function Cons() {
	this.p = 444;
	let self = this;

	function pM() {
		console.log(self.p);
	}

	this.method = function() {
		pM();

	};
}

// 3. call apply

let object_1 = {
	something: 'Я из object_1',
	method( a, b) {
		console.log( `this.something ${a}---------${b}` );
	}
};

let object_2 = {
	something: "Я из object_2"

};

object_1.method.call( object_2 , 12, 22 );


function FUNC() {
	let args = [].slice.call(arguments);
	console.log(args, args instanceof Array);
}


FUNC(100, 200, 300, 400);

function CONS() {
	this.p = "Опять свойство P";
	function pM() {
		console.log( this.p );
	}
	this.method = function () {
		pM.call(this);
	};
}

