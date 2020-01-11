'use strict'
 
 // Array.flter(callback, contextObject)
//----- Обычный перебор через цикл
const cities = [
	{name: 'Moscow', population: 12344534},
	{name: 'Saint Petersburg', population: 5322243},
	{name: 'Novosibirsk', population: 1612933},
	{name: 'Kaliningrad', population: 482443},
	{name: 'Kaluga', population: 336726}
]

const millionPlusCities = [];

for (let  i = 0; i < cities.length; i++) {
	if (cities[i].population > 1000000) {
		millionPlusCities.push(cities[i]);
	};
}

console.log(millionPlusCities);


//---- Тоже самое через filter()
const millionPlusCities_v2 = cities.filter(e => e.population > 1000000);
console.log(millionPlusCities_v2);

// function callback(currentEllement, index, array){}

cities
	.filter(e => e.population < 1000000)
	.sort((a, b) => b.population - a.population)
	.map(e => console.log(e.name + ': ' + e.population));

// ---- ContextObject пример

function isInRange(value) {
	if (typeof value !== 'number') {
		return false;
	}

	return value >= this.lower && value <= this.upper;
}

const data = [10, 20, "30", 1, 5, 'JavaScript filter', undefined, 'example'];

const range = {lower: 1, upper: 10};


const numberInRange = data.filter(isInRange, range);

console.log (numberInRange);

// ---- Отфильтровать массив слов по наличию нескольких букв

const girls = ['Alena', 'Malena', 'Milena', 'Asya', 'Kasya'];

const filterValues = (name) => {
	return girls.filter(e => {
		return e.toLowerCase().indexOf(name.toLowerCase()) > -1;
	});
}

console.log(filterValues('le'));

// ----

const arr = [0, null, 42, undefined, "", true, false, NaN, "", "foo bar"];

const filteredArray = arr.filter(e => (e !== "" && e !== null && e !== undefined) ? e : false );

console.log(filteredArray);

const trueOnly = arr.filter(Boolean);

console.log(trueOnly);

// ----

let kgd = ['Kaliningrad', 'Koenigsberg', 'Selma', 'Gatmak'];

let pupersuper = [];

const modifiedWords = kgd.filter((word, index, array) => {
	array[index]+=' superpuper';
	pupersuper.push(array[index]);
	return word.length >= 11
});

console.log(modifiedWords, pupersuper);