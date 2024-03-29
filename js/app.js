// Accessing necessary nodes
const main = document.querySelector('main');
const h2 = document.createElement('h2');
const aside = document.querySelector('aside');
h2.style.color = '#fff';
h2.style.backgroundColor = 'gold';

const form = document.querySelector('form');

const BASE_URL = `https://currency-conversion-and-exchange-rates.p.rapidapi.com/`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '340187f15fmsh4251fb7b3566c66p19fe01jsn2c636412f715',
		'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com',
	},
};

const btnReset = document.querySelector('#btn-reset');

btnReset.addEventListener('click', () => {
	document.location.reload();
});

// Footer
// Get the current year and `append` it to the copyright line in the `footer`.
const currentYear = document.querySelector('#current-year');
const date = new Date();
const year = date.getFullYear();

currentYear.append(year);
