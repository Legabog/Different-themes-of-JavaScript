'use strict'

// Object destructuring

let obj = {
	name: 'Jack',
	age: 20,
	adress: {
		city: 'Minsk'
	}
}

let {name = 'Max', age = 20} = {};
let {name: personName = "Oleg", age: personAge = 23} = obj;

let {adress:{city: myCity = 'SPB'}} = obj; 
console.log(name, age);

function getData({name, age}) {
	return { name, age };
}

let {name, age} = getData(obj); 



