'use strict'
// Шаблонная строка `daya  ${}!!!`

// Syntax

`${dynamic_value}`;

// Example 1

function greet(name) {
	// console.log('Hello ' + name + '!');
	console.log(`Hello ${name}!`);
}
greet('Max');

// Example 2

const URL = '/api';
let path1 = 'test';
let path2 = 'test2';
let path3 = 'test3';

// const API_URL = URL + '/' + path1 + '/' + path2 + '/' + path3;
const API_URL = `${URL}/${path1}/${path2}/${path3}`
console.log(API_URL);

// Example 3 - Multiple string

function emailMessage(name, mail, status) {
	return `
	Hello ${name},
	Your email ${mail} has been ${status}!
	Thank you for subscription!
	`
}

console.log(emailMessage('Oleg','probringer@mail.ru','approved'));


// Example 4 - Template

/*generate() {
	return `
	<li class="news">
		<a href="${this.url}" target="_blank" class="news__link">
			<figure class="news__figure">
				<img src="${this.urlToImage}" alt="${this.title}" class="news__image">
				<figcaption class="news__description">
					<h1 class="news_title">${this.title}</h1>
					<p class="news__text">${this.description}</p>
					<span class="news__date">%{new Date(this.publishedAt).toLocaleDateString()}</span>
					<cite class="news__aauthor">${this.author}</cite>
				</figcaption>
			</figure>
		</a>
	</li>`;
}*/

// Example 5 -Tagging

const name = "Jack";
console.log(toUppercase`Hello ${name}!`);
function toUppercase(litArr, value) {
	console.log(litArr, value);
	return litArr[0] + value.toUpperCase() + litArr[1];
}